class WelcomeController < ApplicationController
  def index
    @development = TeamMember.all
    @project = PortfolioItem.all.shuffle.first(6)
  end
end
