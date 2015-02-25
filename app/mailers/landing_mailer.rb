class LandingMailer < ActionMailer::Base
  default from: "yogicsadhana108@gmail.com"
  def landing_sender email
    @email = email
    mail(to: "yogicsadhana108@gmail.com", subject: "New User")
  end
end
