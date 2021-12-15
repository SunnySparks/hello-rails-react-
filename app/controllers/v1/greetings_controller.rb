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
        greeting: 'G\'day',
      },
      {
        greeting: 'Hello, Peter',
      },
      {
        greeting: 'Buenas, buenaaaaaaaaaaaaaaaaaas',
      }
    ]}.to_json
  end
end