Rails.application.routes.draw do
  #get 'users/new'

  root                 'flips#home'
  get  'signin'     => 'flips#signin'
  get  'signup'     => 'users#new'

  #Resources
  resources :users
end
