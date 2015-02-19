
class Api::BaseApiController < ApplicationController

  include DeviseTokenAuth::Concerns::SetUserByToken

  # skip_before_filter  :verify_authenticity_token

  before_action :authenticate_user!
  #before_action :authenticate_current_user
  respond_to :json
  # before_action :configure_permitted_parameters, if: :devise_controller?

  def i18n_translations
    @translations ||= I18n.backend.send(:translations)
    @translations[I18n.locale].with_indifferent_access
  end

  private
  # def authenticate_current_user
  #   render json: {}, status: :unauthorized if get_current_user.nil?
  # end
  #
  # def get_current_user
  #   return nil unless cookies[:auth_headers]
  #   auth_headers = JSON.parse cookies[:auth_headers]
  #
  #   expiration_datetime = DateTime.strptime(auth_headers["expiry"], "%s")
  #   current_user = User.find_by uid: auth_headers["uid"]
  #
  #   if current_user &&
  #     current_user.tokens.has_key?(auth_headers["client"]) &&
  #     expiration_datetime > DateTime.now
  #
  #     @current_user = current_user
  #   end
  #   @current_user
  # end

  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.for(:sign_in) << :session
  # end

end
