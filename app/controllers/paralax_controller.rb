class ParalaxController < ApplicationController
  def index
    @development = TeamMember.order(order: :desc)
    @project = PortfolioItem.order(order: :desc).first(6)
  end
end