class ApplicationController < ActionController::Base
    #solo para testear POST, borrar
    protect_from_forgery with: :null_session
end
