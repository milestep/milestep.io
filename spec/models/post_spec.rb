require 'rails_helper'

RSpec.describe Post, type: :model do
  let(:author) {
    author = Author.new(name: "Kartia", position: "Developer")
    author.save
    return author
  }

  before(:each) do
    @post = author.posts.build(title: "Awesome Post!", body: "Some awesome body!")
  end

  it "should be valid" do
    expect(@post).to be_valid
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
end
