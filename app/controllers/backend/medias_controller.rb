class Backend::MediasController < BackendController
  def index
    #binding.pry
    @medias = Medium.where practice_id: media_params[:practice_id]
    @practice = Practice.find media_params[:practice_id]
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
    @media = Medium.find media_params[:id]
    @practice = @media.practice
    render 'show'
  end

  def edit
    @media = Medium.find media_params[:id]
    render 'edit'
  end

  def update
    @media = Medium.find media_params[:id]
    if @media.update_attributes(media_params)
      flash[:success] = t('medias.flash_messages.media_updated')
      redirect_to backend_media_path @media
    else
      flash[:error] = @media.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to edit_backend_media_path(@media)
    end
  end

  def destroy
    @media = Medium.find media_params[:id]
    if @media.destroy
      flash[:success] = t('medias.flash_messages.media_destroyed')
      redirect_to backend_chapter_medias_path @media.practice
    else
      @errors = @media.errors
      render 'shared/errors'
    end
  end

  private
  def media_params
    params.permit :id, :title, :description, :practice_id
  end
end
