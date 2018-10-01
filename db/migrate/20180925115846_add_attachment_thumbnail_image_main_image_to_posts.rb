class AddAttachmentThumbnailImageMainImageToPosts < ActiveRecord::Migration[5.2]
  def self.up
    change_table :posts do |t|
      t.attachment :thumbnail_image
      t.attachment :main_image
    end
  end

  def self.down
    remove_attachment :posts, :thumbnail_image
    remove_attachment :posts, :main_image
  end
end
