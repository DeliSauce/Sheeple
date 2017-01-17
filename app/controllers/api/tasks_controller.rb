class Api::TasksController < ApplicationController

  def create
    @task = Task.new(task_params)
    if @task.save
      render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def index

  end

  def destroy

  end

  def task_params
    params.require(:task).permit(:tasker_id, :user_id, :description, :date, :location, :status)
  end

end
