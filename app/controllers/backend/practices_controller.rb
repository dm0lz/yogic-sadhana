class Backend::PracticesController < BackendController

  def index
    render 'index'
  end

  def create
    @practice = Practice.new practice_params
    if @chapter.save
      flash[:success] = t('chapters.flash_messages.chapter_created')
      redirect_to :backend_course_chapters
    else
      flash[:error] = @chapter.errors.messages.map{|k,v| v}.flatten.join " -- "
      redirect_to new_backend_chapter_path(@chapter)
    end
  end

  private
  def course_params
    params.permit :id, :title, :description
  end
end
