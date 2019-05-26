class AddFullImageUploader < ActiveRecord::Migration[5.2]
  def change
    add_attachment :portfolio_items, :full_image_url
  end
end
