class PortfolioItem < ApplicationRecord
  has_attached_file :image_url
  validates_attachment_content_type :image_url, content_type: /\Aimage\/.*\z/
end
