class Backend::BackendController < ApplicationController

  before_action :authenticate_admin!

  layout 'backend/application'

end
