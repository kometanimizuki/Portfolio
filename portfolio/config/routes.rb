Rails.application.routes.draw do

  root 'portfolio#index'
  get '/portfolio/mail', to: 'portfolio#mail'
  get '/portfolio/profile', to: 'portfolio#profile'
  get '/portfolio/work', to: 'portfolio#work'

end
