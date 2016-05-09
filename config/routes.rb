Rails.application.routes.draw do
  get 'sessions/new'

  #get 'users/new'

  root                   'flips#home'
  get    'signup'     => 'users#new'
  get    'signin'     => 'sessions#new'
  post   'signin'     => 'sessions#create'
  delete 'logout'     => 'sessions#destroy'
  #Resources
  resources :users
end
