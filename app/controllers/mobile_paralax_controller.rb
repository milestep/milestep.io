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

  def approach
    render 'paralax/mobile_pages/approach/'
  end

  def contact_us
    render 'paralax/mobile_pages/contact-us/'
  end

  def team
    @development = TeamMember.order(order: :desc)
    render 'paralax/mobile_pages/team/'
  end

  private

  def check_device
    redirect_to subdomain: '' unless browser.device.mobile? || browser.device.tablet?
  end
end