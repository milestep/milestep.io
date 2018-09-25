ActiveAdmin.register Post do
  menu parent: 'Blog'
  permit_params :title, :body, :author_id, :thumbnail_image, :main_image

  index do
    selectable_column
    id_column
    column :title
    column :body
    column :author_id
    column :thumbnail_image, as: :file
    column :main_image, as: :file
    actions
  end

  form html: { enctype: "multipart/form-data" } do |f|
    f.inputs 'Post Editing' do
      f.input :title
      f.input :body, as: :ckeditor
      f.input :author 
      f.input :thumbnail_image, as: :file, hint: f.post.thumbnail_image? ? image_tag(post.thumbnail_image.url, height: '300') : content_tag(:span, "Upload JPG/PNG/GIF image")
      f.input :main_image, as: :file, hint: f.post.main_image? ? image_tag(post.main_image.url, height: '300') : content_tag(:span, "Upload JPG/PNG/GIF image")
    end
    f.actions
  end
end