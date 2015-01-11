class Frontend::CourseController < Frontend::FrontendController

  def index
    @courses = Course.all
  end

  def show
    @course = Course.find params[:id]
    @chapters = @course.chapters
  end

end
