class Api::V1::MediasController < Api::BaseApiController

  def index
  end

  def show
    @media = Medium.find params[:id]
    render json: { :media => @media }
  end

end
