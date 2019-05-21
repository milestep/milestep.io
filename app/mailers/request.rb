class Request < ApplicationMailer
  # def notify(attrs)
  #   @body = attrs['message']
  #   mail(
  #     from: "#{attrs['email']}",
  #     to: ENV["REQUEST_RECIPIENT"] || 'contact@milestep.io',
  #     subject: "Contact Us"
  #   )
  # end

  def notify(attrs)
    @body = attrs[:message]
    attachment[attrs[:attachment].original_filename] = File.read(attrs[:attachment].path)
    mail(
        from: "#{attrs[:email]}",
        to: ENV["REQUEST_RECIPIENT"] || 'contact@milestep.io',
        subject: "Contact Us"
    )
    #
  end
end
