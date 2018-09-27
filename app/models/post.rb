class Post < ApplicationRecord
  extend FriendlyId
  has_attached_file :thumbnail_image
  has_attached_file :main_image
  belongs_to :author
  validates :title, presence: true
  validates :body, presence: true
  validates_attachment_content_type :thumbnail_image, content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  validates_attachment_content_type :main_image, content_type: ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  friendly_id :slug_candidates, use: [:slugged, :finders]

  def slug_candidates
    [
      :title,
      [:title, :id]
    ]
  end

  def should_generate_new_friendly_id?
    title_changed?
  end

  def formatted_created_date
    created_at.strftime("Created %B %d, %Y")
  end
end
