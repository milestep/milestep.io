class Request < ApplicationMailer
  def notify(attrs)
    @body = attrs['message']
    mail(
      from: attrs['email'],
      to: 'dijientt@gmail.com',
      subject: "Contact Us: #{attrs['name']}",
    )
  end
end
