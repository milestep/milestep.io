Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  constraints subdomain: "blog" do
    get '/', to: 'blog#index'
    resources :posts, only: [:show]
  end

  root 'welcome#index'

  get 'welcome/index', to: 'welcome#index'
  post :contact, to: 'requests#create', as: :contact
end
