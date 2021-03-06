Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show] do
      collection do
        get 'checkusername'
      end
    end

    resource :session, only: [:create, :destroy]
    resources :taskers, only: [:index]
    resources :tasks, only: [:index, :create, :destroy]
  end
end
