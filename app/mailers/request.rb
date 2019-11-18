class Request < ApplicationMailer
  def notify_contact_us(attrs)
    @body = attrs[:message]
    attachments[attrs[:attachment].original_filename] = File.read(attrs[:attachment].path) if attrs[:attachment].present?
    mail(
        to: ENV["REQUEST_RECIPIENT"] || 'contact@milestep.io',
        from: 'noreply@milestep.io',
        reply_to: "#{attrs[:email]}",
        subject: 'Contact Us'
    )
  end
end
