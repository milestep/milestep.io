class MobileParalaxController < ApplicationController
  before_action :check_device

  def index ; end

  def about_us ; end

  def services ; end

  def approach ; end

  def contact_us ; end

  def portfolio
    @portfolio = PortfolioItem.order(order: :desc).first(6)
  end

  def team
    @development = TeamMember.order(order: :desc)
  end

  private

  def check_device
    redirect_to subdomain: '' unless browser.device.mobile? || browser.device.tablet?
  end
end