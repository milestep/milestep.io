class Post < ApplicationRecord
  has_attached_file :thumbnail_image
  has_attached_file :main_image
  belongs_to :author
  validates :title, presence: true
  validates :body, presence: true
  validates_attachment_content_type :thumbnail_image, content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  validates_attachment_content_type :main_image, content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"]

  def formatted_created_date
    created_at.strftime("Created %B %d, %Y") 
  end
end