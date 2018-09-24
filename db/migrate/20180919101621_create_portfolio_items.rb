class CreatePortfolioItems < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolio_items do |t|
      t.string :name
      t.text :description 
      t.string :web_address
      t.attachment :image_url

      t.timestamps
    end
  end
end
