
class Api::V1::PracticesController < Api::BaseApiController

  def index
  end

  def show
    @practice = Practice.find params[:id]
    @medias = @practice.media
    render json: {:practice => @practice, :medias => @medias}
  end

end
