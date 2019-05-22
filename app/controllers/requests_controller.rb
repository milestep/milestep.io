class RequestsController < ApplicationController
  def create
    Request.notify(attrs).deliver_later
    head 200
  end

  def contact_us
    Request.notify_contact_us(attrs_for_contact_us).deliver_now
    head :ok
  end

  private

  def attrs
    @attrs ||= params[:contact].as_json
  end

  def attrs_for_contact_us
    @attrs ||= params.permit!
    # @attrs ||= params.require(:contact).permit(:email, :message, :attachment)
  end
end
