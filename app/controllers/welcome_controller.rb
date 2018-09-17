class WelcomeController < ApplicationController
  def index
    @development = TeamMember.all
  end
end
