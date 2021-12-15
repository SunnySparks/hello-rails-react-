class V1::GreetingsController < ApplicationController
  def index
    render json: { :greetings => [
      {
        greeting: 'Cheers, mate',
      },
      {
        greeting: 'Hi, friend',
      },
      {
        greeting: 'g\'day',
      },
      {
        greeting: 'Hello, Peter',
      }
    ]}.to_json
  end
end