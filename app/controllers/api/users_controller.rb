class Api::UsersController < ApplicationController

  def create
    # debugger
    p "HIT THE USER CONTROLLER --- CREATE"
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      p @user.errors.full_messages
      render json: @user.errors.full_messages, status: 422
    end
  end

  def checkusername
    if User.where("username = ?", user_params[:username]).length == 0
      render json: []
    else
      render json: ['Username has already been taken']
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end

end
