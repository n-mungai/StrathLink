Rails.application.routes.draw do
  resources :articles, only: [:index, :show, :create]
  resources :messages, only: [:index, :show, :create]
  resources :students, only: [:index, :show, :create]

    get '/students', to: 'students#index'

    get '/messages', to: 'messages#index'

    get '/loggedin', to: 'students#show'

    post '/signup', to: 'students#create'

    # routes for the articles
    get '/articles', to: 'articles#index'

    post '/login', to: 'sessions#create'

    delete '/logout', to: 'sessions#destroy'


  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
