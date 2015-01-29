class Api::V2::ChaptersController < Api::BaseApiController

  def index
    @course = Course.find params[:course_id]
    @chapters = @course.chapters
    render json: { :chapters => @chapters }.to_a
  end

end
