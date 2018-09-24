class AddMainPostImageToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :main_post_image, :string
  end
end
