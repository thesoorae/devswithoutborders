Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :show, :update, :index]
    resource :session, only: [:create, :destroy, :show]
  end
  root "static_pages#root"
end
