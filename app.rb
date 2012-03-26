require 'sinatra'

set :static, true
set :public_folder, "#{File.dirname(__FILE__)}/public"


get '/:name/script.js' do
  @name = params[:name]
	erb :script
end
