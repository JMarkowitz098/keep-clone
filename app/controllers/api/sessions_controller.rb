class Api::SessionsController < ApplicationController
    # skip_before_action :verify_authenticity_token
  before_action :require_signed_in!, only: [:destroy]

  def create
    @user = User.find_by_credentials(
        params[:user][:email],
        params[:user][:password]
        )
        
    if @user.nil?
        render json: ['Invalid email or password.'], status: 404
    else
    # Log them in and redirect them if we find them
      sign_in!(@user)
      # redirect_to "/api/users/#{@user.id}/show"
      render 'api/users/show'
    end
  end

  def destroy
    if signed_in?
      sign_out!
      render json: {}
    else
      render json: "Invalid credentials", status: 404
    end
  end
end
