ActiveAdmin.register Author do
  permit_params :name, :position

  index do
    selectable_column
    id_column
    column :name
    column :position
    actions
  end
end