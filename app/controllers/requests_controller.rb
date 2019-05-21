class RequestsController < ApplicationController
  def create
    Request.notify(attrs).deliver_later
    respond_to :js
  end

  private

  def attrs
    @attrs ||= params[:contact].as_json
  end
end
