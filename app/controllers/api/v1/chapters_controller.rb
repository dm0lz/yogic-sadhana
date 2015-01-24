class Api::V1::ChaptersController < Api::BaseApiController

  def index
  end

  def show
    @chapter = Chapter.find params[:id]
    render json: {:chapter => @chapter, :practices => @chapter.practices, :theories => @chapter.theories}
  end

end
