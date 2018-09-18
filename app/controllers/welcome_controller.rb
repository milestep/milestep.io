class WelcomeController < ApplicationController
  def index
    @development = TeamMember.all
    @project = PortfolioItem.all
  end
end
