class ApplicationController < ActionController::Base
  include MetaTags
  before_action :require_meta_tags

  private
  def require_meta_tags
    @meta_tags = default_meta_tags
  end
end
