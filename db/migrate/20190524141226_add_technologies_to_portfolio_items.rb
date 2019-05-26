class AddTechnologiesToPortfolioItems < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolio_items, :image_url, :string
  end
end
