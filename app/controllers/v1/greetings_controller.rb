class V1::GreetingsController < ApplicationController
  def index
    render json: { :greetings => [
      {
        :name => 'good morning',
      }
    ]}.to_json
  end
end