
class Api::BaseApiController < ApplicationController

  respond_to :json

  def index
    render json: {:courses => Course.all}
  end

  def show
    @course = Course.find params[:id]
    @chapters = @course.chapters
    render json: {:course => @course, :chapters => @chapters}
  end

end
