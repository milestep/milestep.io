ActiveAdmin.register Post do
  permit_params :title, :body, :author_id, :image_link

  index do
    selectable_column
    id_column
    column :title
    column :body
    column :author_id
    column :image_link
    actions
  end
end