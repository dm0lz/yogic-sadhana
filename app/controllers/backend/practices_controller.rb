class Backend::PracticesController < BackendController

  before_action :authenticate_admin!

  def index
    render text: "Backend practices"
  end

end
