class Backend::PracticesController < BackendController

  def index
    @practices = Practice.where chapter_id: practice_params[:chapter_id]
    @chapter = Chapter.find practice_params[:chapter_id]
    render 'index'
  end

  def create
    @practice = Practice.new practice_params
    if @practice.save
      flash[:success] = t('chapters.flash_messages.chapter_created')
      redirect_to backend_chapter_practices_path(@practice.chapter)
    else
      flash[:error] = @chapter.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to new_backend_chapter_path(@chapter)
    end
  end

  def show
    @practice = Practice.find practice_params[:id]
    @chapter = @practice.chapter
    render 'show'
  end

  def edit
    @practice = Practice.find practice_params[:id]
    render 'edit'
  end

  def update
    @practice = Practice.find practice_params[:id]
    if @practice.update_attributes(practice_params)
      flash[:success] = t('practices.flash_messages.practice_updated')
      redirect_to backend_practice_path @practice
    else
      flash[:error] = @practice.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to edit_backend_practice_path(@practice)
    end
  end

  def destroy
    @practice = Practice.find practice_params[:id]
    if @practice.destroy
      flash[:success] = t('practices.flash_messages.practice_destroyed')
      redirect_to backend_chapter_practices_path @practice.chapter
    else
      @errors = @courses.errors
      render 'shared/errors'
    end
  end

  private
  def practice_params
    params.permit :id, :title, :description, :chapter_id
  end
end
