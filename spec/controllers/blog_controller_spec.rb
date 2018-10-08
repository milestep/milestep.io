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
  end

end
