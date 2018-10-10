require 'rails_helper'

RSpec.describe Post, type: :model do
  before(:each) do
    @post = build(:post)
  end

  it "should be valid" do
    expect(@post).to be_valid
  end

  it "should not be valid without author" do
    @post.author = nil
    expect(@post).to_not be_valid
  end

  describe "title validation" do
    it "should not be valid without title" do 
      @post.title = nil
      expect(@post).to_not be_valid
    end
  end

  describe "body validation" do
    it "should not be valid without body" do
      @post.body = nil
      expect(@post).to_not be_valid
    end
  end

  describe "friendly_id" do
    it "should set propper url from title" do
      @post.title = "title"
      @post.save
      expect(@post.friendly_id).to eq("title")
    end

    it "should parametrize url from title" do
      @post.title = "Title url  link"
      @post.save
      expect(@post.friendly_id).to eq("title-url-link")
    end

    it "should change when title updates" do
      @post.title = "title"
      @post.save
      @post.title = "new title"
      @post.save
      expect(@post.friendly_id).to eq("new-title")
    end

    it "should use id if titles match" do
      post1 = create(:post, title: "title")
      post2 = create(:post, title: "title")

      expect(post2.friendly_id).to include("title-")
    end
  end
end
