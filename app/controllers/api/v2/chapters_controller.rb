class Api::V2::ChaptersController < Api::BaseApiController

  def index
    @chapter = Chapter.find params[:course_id]
    render json: {:chapter => @chapter, :practices => @chapter.practices, :theories => @chapter.theories}.to_a
  end

  def show
    @chapter = Chapter.find params[:id]
    @theories_medias = @chapter.theories.map{ |theory| { :theory => theory, :medias => theory.media } }
    @practices_medias = @chapter.practices.map{ |practice| { :practice => practice, :medias => practice.media } }
    render json: {:chapter => @chapter, :practices => @practices_medias, :theories => @theories_medias}
  end

end
