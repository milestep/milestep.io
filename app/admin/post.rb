ActiveAdmin.register Post do
  menu parent: 'Blog'
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

  form html: { enctype: "multipart/form-data" } do |f|
    f.inputs 'Post Editing' do
      f.input :title
      f.input :body, as: :ckeditor
      f.input :author 
      f.input :image_link, hint: f.post.image_link? ? image_tag(post.image_link, height: '300') : content_tag(:span, "Upload JPG/PNG/GIF image")
    end
    f.actions
  end
end