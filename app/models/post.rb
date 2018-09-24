class Post < ApplicationRecord
  belongs_to :author
  validates :title, presence: true
  validates :body, presence: true

  def formatted_created_date
    created_at.strftime("Created %B %d, %Y") 
  end
end