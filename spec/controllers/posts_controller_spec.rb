require 'rails_helper'

RSpec.describe PostsController, type: :controller do

  before(:each) do
    @post = create(:post)
  end

  describe "GET #show" do
    it "returns http success" do
      get :show, params: {  id: @post }
      expect(response).to have_http_status(:success)
    end
  end

  describe "set_post" do
    it "should set proper post" do
      get :show, params: { id: @post }
      expect(assigns(:post).id).to eq(@post.id)
    end
  end

  describe "get_html_text_for_meta_tag" do
    it "should get first p of the paragraph" do
      html_text = "<div><p>hello</p><p>no</p></div>"
      expect(@controller.send(:get_html_text_for_meta_tag, html_text)).to eq("hello")
    end
  end

  describe "generate_meta_tag_from_post" do
    it "should return right tags" do
      new_post_hash = { 
        title: "title1", 
        body: "body2", 
      }

      expected_meta_tags = {
        og_description: "body2",
        og_locale: "en_US",
        og_site_name: "MileStep | Web &amp; Mobile App Development Company",
        og_title: "title1",
        og_type: "article",
        og_url: "http://blog.test.host/posts/title1",
        twitter_card: "summary",
        twitter_description: "body2",
        twitter_title: "title1"
      }

      post = create(:post, new_post_hash)
      get :show, params: { id: post }
      expect(assigns(:meta_tags)).to include(expected_meta_tags)
    end
  end

end
