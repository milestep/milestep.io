class DeleteImageLinkAndMainPostImageFromPost < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :image_link
    remove_column :posts, :main_post_image
  end
end
