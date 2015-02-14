
class TokenAuth::SessionsController < DeviseTokenAuth::SessionsController

  def create
    super
    # binding.pry
  end

end
