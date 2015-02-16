
class TokenAuth::SessionsController < DeviseTokenAuth::SessionsController

  skip_before_filter  :verify_authenticity_token

  def create
    # binding.pry
    super
  end

end
