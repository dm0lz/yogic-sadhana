class HomeController < ApplicationController
  def index
    render 'index'
  end

  def landing_mailer
    LandingMailer.landing_sender(params[:email]).deliver
    redirect_to root_path
  end
end
