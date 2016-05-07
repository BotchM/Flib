Rails.application.routes.draw do
  root 'flips#home'

  get 'flips/signin'

  get 'flips/signup'

end
