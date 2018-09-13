class RequestsController < ApplicationController
  def create
    Request.notify(attrs).deliver_now
    head 200
  end

  private

  def attrs
    @attrs ||= params[:contact].as_json
  end
end
