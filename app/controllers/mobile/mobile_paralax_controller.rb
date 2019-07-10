module Mobile
  class MobileParalaxController < ApplicationController
    before_action :check_device

    def index ; end

    def about_us ; end

    def services ; end

    def approach ; end

    def contact_us ; end

    def cookie_policy
      render 'paralax/cookie_policy'
    end

    def portfolio
      @portfolio = PortfolioItem.order(order: :desc)
    end

    def our_portfolio
      @technologies = PortfolioItem.order(order: :desc)
      render 'paralax/portfolio'
    end

    def team
      @development = TeamMember.order(order: :desc)
    end

    private

    def check_device
      redirect_to root_path unless browser.device.mobile? || browser.device.tablet?
    end
  end
end
