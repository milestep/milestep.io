ActiveAdmin.register TeamMember do
    permit_params :name, :title, :image_url
  
    form do |f|
      f.inputs do
        f.input :name
        f.input :title
        f.input :image_url, as: :file
      end
      f.actions
    end

  end