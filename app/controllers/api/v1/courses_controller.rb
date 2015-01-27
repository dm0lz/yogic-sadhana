class Api::V1::CoursesController < Api::BaseApiController

  def index
    render json: {:courses => Course.all}
  end

  def show
    @course = Course.find params[:id]
    @chapters = @course.chapters
    render json: {:course => @course, :chapters => @chapters, :i18n_translations => i18n_translations}
  end

  def menu
    @course = Course.find params[:course_id]
    @chapters = @course.chapters
    render json: {:course => @course, :chapters => @chapters}
  end

end
