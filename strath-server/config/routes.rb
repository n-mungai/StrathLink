Rails.application.routes.draw do
  resources :messages
  resources :students, only: [:index, :show, :create]

    get 'student', to: 'students#index'

    post 'student', to: 'students#create'


  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
