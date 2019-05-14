class ParalaxController < ApplicationController
  def index
    @development = TeamMember.order(order: :desc)
    @portfolio = PortfolioItem.order(order: :desc).first(6)
    render 'paralax/mobile' if browser.device.mobile? || browser.device.tablet?
  end

  #mobile

  def about_us
    render 'paralax/mobile_pages/about-us/'
  end
end