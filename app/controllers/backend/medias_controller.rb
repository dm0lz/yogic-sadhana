class Backend::MediasController < BackendController

  before_action :find_media, only: [:show, :edit, :update, :destroy]
  before_action :find_practice, only: [:index, :new]

  def index
    @medias = Medium.where practice_id: params[:practice_id]
    render 'index'
  end

  def create
    @media = Medium.new media_params
    if @media.save
      flash[:success] = t('medias.flash_messages.media_created')
      redirect_to backend_practice_medias_path(@media.practice)
    else
      flash[:error] = @practice.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to new_backend_practice_path(@practice)
    end
  end

  def show
    @practice = @media.practice
    render 'show'
  end

  def edit
    render 'edit'
  end

  def new
    @media = Medium.new
    render 'new'
  end

  def update
    if @media.update_attributes(media_params)
      flash[:success] = t('medias.flash_messages.media_updated')
      redirect_to backend_media_path @media
    else
      flash[:error] = @media.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to edit_backend_media_path(@media)
    end
  end

  def destroy
    if @media.destroy
      flash[:success] = t('medias.flash_messages.media_destroyed')
      redirect_to backend_practice_medias_path @media.practice
    else
      @errors = @media.errors
      render 'shared/errors'
    end
  end

  private
  def media_params
    params.require(:medium).permit(:id, :title, :description, :practice_id, :audio)
  end

  def find_media
    @media = Medium.find params[:id]
  end

  def find_practice
    @practice = Practice.find params[:practice_id]
  end

end
