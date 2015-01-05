class Frontend::PracticesController < Frontend::FrontendController

  before_action :authenticate_admin!

  def index
    render 'index'
  end

end
