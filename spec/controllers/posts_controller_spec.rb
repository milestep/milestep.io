require 'rails_helper'

RSpec.describe PostsController, type: :controller do

  before(:each) do
    author = create(:author)
    @post = create(:post)
  end

  describe "GET #show" do
    it "returns http success" do
      get :show, params: {  id: @post }
      expect(response).to have_http_status(:success)
    end
  end

end
