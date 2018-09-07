Rails.application.routes.draw do
  root 'welcome#index'

  get 'welcome/index', to: 'welcome#index'
  post :contact, to: 'requests#create', as: :contact
end
