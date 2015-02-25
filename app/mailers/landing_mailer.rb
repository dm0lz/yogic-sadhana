class LandingMailer < ActionMailer::Base
  default from: "yogicsadhana1080@gmail.com"
  def landing_sender email
    @email = email
    mail(to: "yogicsadhana1080@gmail.com", subject: "New User")
  end
end
