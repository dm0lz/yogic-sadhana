class Api::V1::CoursesController < Api::BaseApiController

  # before_filter :authenticate_user!

  def index
    render json: {:courses => Course.all, :i18n_translations => i18n_translations}
  end

  def show
    @course = Course.find params[:id]
    @chapters = @course.chapters
    render json: {:course => @course, :chapters => @chapters, :i18n_translations => i18n_translations}
  end

end
