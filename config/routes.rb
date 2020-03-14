Rails.application.routes.draw do
  namespace :api do
    get 'products/index'
    get 'products/show'
    get 'products/create'
    get 'products/update'
    get 'products/destroy'
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
