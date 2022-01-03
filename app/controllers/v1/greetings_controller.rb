class V1::GreetingsController < ApplicationController
  def index
    render json: { greetings: [
      {
        greeting: 'Hi!!!'
      },
      {
        greeting: 'Good to see you'
      },
      {
        greeting: 'G\'day'
      },
      {
        greeting: 'Hello, Peter'
      },
      {
        greeting: 'Bonjour'
      }
    ] }.to_json
  end
end
