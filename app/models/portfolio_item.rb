class PortfolioItem < ApplicationRecord
  has_attached_file :image_url
  has_attached_file :full_image_url
  validates_attachment_content_type :image_url, content_type: /\Aimage\/.*\z/

  def technologies_array
    technologies.split(/[,] /)
  end
end
