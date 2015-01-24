
class Api::V1::TheoriesController < Api::BaseApiController

  def index
  end

  def show
    @theory = Theory.find params[:id]
    @medias = @theory.media
    render json: {:theory => @theory, :medias => @medias}
  end

end
