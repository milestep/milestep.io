class MobileParalaxController < ApplicationController
  # before_action :check_device

  def index
    @development = TeamMember.order(order: :desc)
    @portfolio = PortfolioItem.order(order: :desc).first(6)    
    render template: 'paralax/mobile'
  end

  def about_us
    render 'paralax/mobile_pages/about-us/'
  end

  def services
    render 'paralax/mobile_pages/services/'
  end

  private

  def check_device
    redirect_to subdomain: '' unless browser.device.mobile? || browser.device.tablet?
  end
end