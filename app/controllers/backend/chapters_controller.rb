class Backend::ChaptersController < BackendController

  def index
    @chapters = Chapter.all
    @course = Course.find chapter_params[:course_id]
    render 'index'
  end

  def create
    @chapter = Chapter.new chapter_params
    if @chapter.save
      flash[:success] = t('chapters.flash_messages.chapter_created')
      redirect_to :backend_course_chapters
    else
      flash[:error] = @chapter.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to new_backend_chapter_path(@chapter)
    end
  end

  def edit
    @chapter = Chapter.find chapter_params[:id]
    render 'edit'
  end

  def destroy
    @chapter = Chapter.find chapter_params[:id]
    if @chapter.destroy
      flash[:success] = t('chapters.flash_messages.chapter_destroyed')
      redirect_to backend_course_chapters_path(@chapter.course)
    else
      @errors = @chapter.errors
      render 'shared/errors'
    end
  end

  def update
    @chapter = Chapter.find chapter_params[:id]
    if @chapter.update_attributes(chapter_params)
      flash[:success] = t('chapters.flash_messages.chapter_updated')
      redirect_to backend_course_chapters_path(@chapter.course)
    else
      flash[:error] = @chapter.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to edit_backend_chapter_path(@chapter)
    end
  end

  def show
    @chapter = Chapter.find chapter_params[:id]
    @practices = @chapter.practices
    render 'show'
  end

  private
  def chapter_params
    params.permit :id, :title, :description, :course_id
  end
end
