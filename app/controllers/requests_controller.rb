class RequestsController < ApplicationController
  def contact_us
    Request.notify_contact_us(attrs_for_contact_us).deliver_now
    head :ok
  end

  private def attrs_for_contact_us
    @attrs ||= params.permit!
  end
end
