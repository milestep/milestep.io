class RequestsController < ApplicationController
  def create
    Request.notify(attrs).deliver_now
    # respond_to :js
    # index
  end

  def index
    respond_to :js
  end

  private

  def attrs
    # @attrs ||= params[:contact].as_json
    @attrs ||= params.permit!
  end
end
