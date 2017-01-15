class Api::TaskersController < ApplicationController

  def index
    @taskers = Tasker.all
    if location
      @taskers = @taskers.where('location LIKE ?', "%#{location}")
    end
    if skill
      @taskers = @taskers.where('skill LIKE ?', "%#{skill}")
    end
    @taskers = @taskers.where('rate BETWEEN ? AND ?', "#{minRate}", "#{maxRate}")
    # if autobook
    #   @taskers = @taskers.where('auto_book LIKE ?', true)
    # end

    render :index
  end

  def location
    params[:location]
  end

  def skill
    params[:skill]
  end

  def minRate
    params[:minRate]
  end

  def maxRate
    params[:maxRate]
  end

  # def autobook
  #   params[:autobook]
  # end

end