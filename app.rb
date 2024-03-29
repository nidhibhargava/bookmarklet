require 'sinatra'

set :static, true
set :public_folder, "#{File.dirname(__FILE__)}/public"

helpers do
  def url_path  
    if ENV.has_key?("DEPLOY_ENV")
      @url_path = "http://affbar-bookmarklet.herokuapp.com"
    else
      @url_path = "http://localhost:9393"
    end 
  end
end

get '/:name/script.js' do
  
  url_path
  @restaurant_url = "https://eatbmore.localupmenus.com/order-online-mothers-federal-hill-grille-federal-hill-american/step1.aspx" 
        
  @name = params[:name]
	erb :script
end

get '/' do   
  url_path
  erb :index
end
