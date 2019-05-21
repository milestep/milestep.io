class Request < ApplicationMailer
  def notify(attrs)
    @body = attrs['message']
    mail(
      from: "#{attrs['email']}",
      # to: ENV["REQUEST_RECIPIENT"] || 'contact@milestep.io',
      to: ENV["REQUEST_RECIPIENT"] || 'sergeyripchanskiy@gmail.com',
      subject: "Contact Us"
    )
  end
end
