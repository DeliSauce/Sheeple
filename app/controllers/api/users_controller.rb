class Api::UsersController < ApplicationController

  def create
    # debugger
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by_id(params[:id])
    # render json: @user.tasks
    # "api/users/dashboard"
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end
