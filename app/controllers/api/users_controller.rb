class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    # before_action :require_signed_in!, only: [:show, :index]
  
  def create
        @user = User.new(user_params)
        if @user.save
            sign_in!(@user)
            render json: @user
        else
            render json: @user.errors.full_messages, status: 400
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
