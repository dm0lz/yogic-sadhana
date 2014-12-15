class BackendController < ApplicationController

  before_action :authenticate_admin!

  before_action :set_locale
  def set_locale
      I18n.locale = params[:locale] || I18n.default_locale
  end

end
