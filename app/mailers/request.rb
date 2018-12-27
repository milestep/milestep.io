class Request < ApplicationMailer
  def notify(attrs)
    @body = attrs['message']
    mail(
      from: "#{attrs['email']}",
      to: ENV["REQUEST_RECIPIENT"] || 'contact@milestep.io',
      subject: "Contact Us"
    )
  end
end
