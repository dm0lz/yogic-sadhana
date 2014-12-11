class Backend::PracticesController < BackendController

  before_action :authenticate_admin!

  def index
    render 'index'
  end

end
