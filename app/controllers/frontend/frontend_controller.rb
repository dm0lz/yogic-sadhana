class Frontend::FrontendController < ApplicationController

  before_action :authenticate_user!

  layout 'frontend/application'

end
