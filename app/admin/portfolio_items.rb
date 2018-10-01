ActiveAdmin.register PortfolioItem do
  permit_params :name, :description, :web_address, :image_url, :order

  form do |f|
    f.inputs do
      f.input :name
      f.input :description
      f.input :order
      f.input :web_address
      f.input :image_url, as: :file
    end
    f.actions
  end

end
