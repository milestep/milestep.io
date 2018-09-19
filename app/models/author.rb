class Author < ApplicationRecord
  # has_many :posts, dependent: :destroy
  validates :name, presence: true, length: { maximum: 50 }
end
