class HomeController < ApplicationController

  def index
    render 'index'
  end

  def create_subscription
    @email = params[:email]
    LandingMailer.landing_sender(@email).deliver
    render ERB.new("home/close_subscription_modal.js.erb").result
  end

  def show_subscription_modal
    render ERB.new("home/show_subscription_modal.js.erb").result
  end

end
