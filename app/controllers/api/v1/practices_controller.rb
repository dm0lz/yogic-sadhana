
class Api::V1::PracticesController < Api::BaseApiController

  def index
  end

  def show
    @practice = Practice.find params[:id]
    @practices = @practice.chapter.practices
    @medias = @practice.media
    render json: {:practice => @practice, :medias => @medias, :practices => @practices}
  end

end
