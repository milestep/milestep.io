class Request < ApplicationMailer
  def notify(attrs)
    @body = attrs['message']
    mail(
      from: attrs['email'],
      to: ENV["MAILGUN_RECIPIENT"] || 'eugene@milestep.io',
      subject: "Contact Us"
    )
  end
end
