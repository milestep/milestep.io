class CreateTeamMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :team_members do |t|
      t.string :name
      t.string :title
      t.attachment :image_url

      t.timestamps
    end
  end
end
