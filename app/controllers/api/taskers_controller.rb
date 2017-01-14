class Api::TaskersController < ApplicationController

  def index
    @taskers = Tasker.all
    if location
      @taskers = @taskers.where('location LIKE ?', "%#{location}")
    end
    render :index
  end

  def location
    params[:location]
  end

end
