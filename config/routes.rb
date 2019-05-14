Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  constraints subdomain: 'blog' do
    get '/', to: 'blog#index'
    resources :posts, only: [:show]
  end

  constraints subdomain: 'mobile' do
    get '/', to: 'mobile_paralax#index'
    get '/about', to: 'mobile_paralax#about_us'
  end

  root 'paralax#index'

  get '/', to: 'paralax#index'

  post :contact, to: 'requests#create', as: :contact
end
