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
    get '/services', to: 'mobile_paralax#services'
    get '/approach', to: 'mobile_paralax#approach'
    get '/contact_us', to: 'mobile_paralax#contact_us'
    get '/team', to: 'mobile_paralax#team'
    get '/portfolio', to: 'mobile_paralax#portfolio'
  end

  root 'paralax#index'
  get '/portfolio', to: 'paralax#portfolio'

  get '/', to: 'paralax#index'

  post :contact, to: 'requests#create', as: :contact
  post '/contact_us', to: 'requests#contact_us'
end
