Rails.application.routes.draw do


  scope "(:locale)", :locale => /en|fr/ do

    root to: "home#index"

    devise_for :users
    devise_for :admins, :controllers => { :sessions => 'authentication/sessions', :passwords => 'authentication/passwords', :registrations => 'authentication/registrations' }

    namespace :backend do

      resources :courses, shallow: true do
        resources :chapters, shallow: true do
          resources :practices, shallow: true do
            resources :medias
          end
          resources :theories, shallow: true do
            resources :medias
          end
        end
      end

    end

    namespace :frontend do

      get "/ys" => "main#index", :as => "main_index"

    end

    namespace :api do

      namespace :v1 do
        resources :courses, only: [:index, :show] do
          get :menu
        end
        resources :chapters, only: [:index, :show]
        resources :practices, only: [:index, :show]
        resources :theories, only: [:index, :show]
        resources :medias, only: [:index, :show]
      end

      namespace :v2 do
        resources :courses, only: [:index, :show] do
          resources :chapters, only: [:index, :show] do
            resources :practices, only: [:index, :show] do
              resources :medias, only: [:index, :show]
            end
            resources :theories, only: [:index, :show] do
              resources :medias, only: [:index, :show]
            end
          end
        end
      end

    end

  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
