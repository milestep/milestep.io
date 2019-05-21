class RequestsController < ApplicationController
  def create
    # pry
    # Request.notify(attrs).deliver_later
    # respond_to do |format|
    #   format.js
    # end
    # head 200
  end

  private

  def attrs
    @attrs ||= params[:contact].as_json
  end
end
