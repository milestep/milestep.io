class RequestsController < ApplicationController
  def create
    # pry
    # respond_to :js
    # pry
    Request.notify(attrs).deliver_later
  end

  private

  def attrs
    # @attrs ||= params[:contact].as_json
    @attrs ||= params.permit!
  end
end
