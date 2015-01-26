
class Api::V1::TheoriesController < Api::BaseApiController

  def index
  end

  def show
    @theory = Theory.find params[:id]
    @theories = @theory.chapter.theories
    @medias = @theory.media
    render json: {:theory => @theory, :medias => @medias, :theories => @theories}
  end

end
