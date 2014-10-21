require 'sinatra'
set :root, File.dirname(__FILE__)
set :public_folder, 'public'
set :views, Proc.new { File.join(root) }

get '/' do
  erb :index
end