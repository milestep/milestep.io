class AddOrderToPortfolioItems < ActiveRecord::Migration[5.2]
  def change
    add_column :portfolio_items, :order, :integer, default: 0
  end
end
