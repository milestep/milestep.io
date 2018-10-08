require 'rails_helper'

RSpec.describe BlogController, type: :controller do
  before(:each) do
    10.times do
      create(:post)
    end
  end

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "returns 6 posts" do
      get :index
      expect(assigns(:posts).length).to eq(6)
    end

    describe "filter posts" do
      it "should return posts filtered by title" do
        3.times do
          create(:post, title: "hello")
        end
        get :index, params: { query: "hello" }
        expect(assigns(:posts).length).to eq(3)
      end
      
      it "should be case insensitive" do
        create(:post, title: "new title")
        get :index, params: { query: "NeW" }
        expect(assigns(:posts).length).to eq(1)
      end
    end
  end

end
