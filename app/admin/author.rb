ActiveAdmin.register Author do
  menu parent: 'Blog'
  permit_params :name, :position

  index do
    selectable_column
    id_column
    column :name
    column :position
    actions
  end
end