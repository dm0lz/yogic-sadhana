class Backend::MediasController < Backend::BackendController

  before_action :find_media, only: [:show, :edit, :update, :destroy]
  before_action :find_practice_or_theory, only: [:index, :new]

  def index
    #@medias = Medium.where practice_id: params[:practice_id]
    @practice.nil? ? @medias = @theory.media : @medias = @practice.media
    render 'index'
  end

  def create
    @media = Medium.new media_params
    if @media.save
      flash[:success] = t('medias.flash_messages.media_created')
      redirect_to @media.mediumable_type == "Theory" ? backend_theory_medias_path(@media.mediumable) : backend_practice_medias_path(@media.mediumable)
    else
      flash[:error] = @media.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to new_backend_practice_path(@media)
    end
  end

  def show
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
      redirect_to @media.mediumable_type == "Theory" ? backend_theory_medias_path(@media.mediumable) : backend_practice_medias_path(@media.mediumable)
    else
      @errors = @media.errors
      render 'shared/errors'
    end
  end

  private
  def media_params
    params.require(:medium).permit(:id, :title, :description, :practice_id, :audio, :video, :mediumable_type, :mediumable_id)
  end

  def find_media
    @media = Medium.find params[:id]
  end

  def find_practice_or_theory
    if params[:practice_id]
      @practice = Practice.find params[:practice_id]
    elsif params[:theory_id]
      @theory = Theory.find params[:theory_id]
    end
  end

end
