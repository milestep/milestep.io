class Request < ApplicationMailer
  def notify(attrs)
    @body = attrs['message']
    mail(
      from: "#{attrs['name']} <#{attrs['email']}>",
      to: 'eugene@milestep.io',
      subject: "Contact Us: #{attrs['name']}",
    )
  end
end
