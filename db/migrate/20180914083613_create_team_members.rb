class CreateTeamMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :team_members do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :team_text
      t.string :image_url

      t.timestamps
    end
  end
end
