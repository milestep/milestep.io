class AddOrderToTeamMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :team_members, :order, :integer, default: 0
  end
end
