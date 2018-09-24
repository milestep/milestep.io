class ChangePostBodyToText < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :body, :text
  end
end
