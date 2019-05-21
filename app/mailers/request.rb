class Request < ApplicationMailer
  def notify(attrs)
    @body = attrs[:message]
    attachments[attrs[:attachment].original_filename] = File.read(attrs[:attachment].path) if attrs[:attachment].present?
    mail(
        from: "#{attrs[:email]}",
        to: ENV["REQUEST_RECIPIENT"] || 'contact@milestep.io',
        subject: "Contact Us"
    )
  end
end
