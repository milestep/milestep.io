class ParalaxController < ApplicationController
  before_action :check_device

  def index
    @development = TeamMember.order(order: :desc)
    @portfolio = PortfolioItem.order(order: :desc)
  end

  def portfolio
    @technologies = PortfolioItem.order(order: :desc)
  end

  private

  def check_device
    redirect_to subdomain: 'mobile' if browser.device.mobile? || browser.device.tablet?
  end
end