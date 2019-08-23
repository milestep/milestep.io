class AddTechnologiesToPortfolioItems < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolio_items, :technologies, :string
  end
end
