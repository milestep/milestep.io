class ParalaxController < ApplicationController
  before_action :check_device

  def index
    @development = TeamMember.order(order: :desc)
    @portfolio = PortfolioItem.order(order: :desc)
  end

  def portfolio
    @technologies = PortfolioItem.order(order: :desc)
  end

  def cookie_policy ; end

  private

  def check_device
    redirect_to mobile_path if browser.device.mobile? || browser.device.tablet?
  end
end