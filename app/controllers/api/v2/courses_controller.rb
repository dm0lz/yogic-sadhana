
class Api::V2::CoursesController < Api::BaseApiController

  def index

  end

  def show
    @course = Course.find params[:id]
    @chapters = @course.chapters
    render json: {:course => @course, :chapters => @chapters, :i18n_translations => i18n_translations}
  end

end
