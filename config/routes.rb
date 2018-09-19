Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root 'welcome#index'

  get 'welcome/index', to: 'welcome#index'
  post :contact, to: 'requests#create', as: :contact

  get '/blog', to: 'blog#index'
  resources :posts, only: [:show], path: "/blog"
end
