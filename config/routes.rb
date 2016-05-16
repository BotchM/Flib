Rails.application.routes.draw do
  get 'sessions/new'

  #get 'users/new'

  root                   'flips#home'
  get    'signup'     => 'users#new'
  get    'login'      => 'sessions#new'
  post   'login'      => 'sessions#create'
  delete 'logout'     => 'sessions#destroy'
  #Resources
  resources :users
end
