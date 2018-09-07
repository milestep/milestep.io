class Request < ApplicationMailer
  def notify(attrs)
    @body = attrs['message']
    mail(
      from: "#{attrs['name']} <#{attrs['email']}>",
      to: 'postmaster@mg.milestep.io',
      subject: "Contact Us: #{attrs['name']}",
    )
  end
end
