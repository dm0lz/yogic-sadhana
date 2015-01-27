
class Api::BaseApiController < ApplicationController

  respond_to :json

  def i18n_translations
    @translations ||= I18n.backend.send(:translations)
    @translations[I18n.locale].with_indifferent_access
  end

end
