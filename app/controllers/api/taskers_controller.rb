class Api::TaskersController < ApplicationController

  def index
    @taskers = Tasker.all
    render :index
  end

end
