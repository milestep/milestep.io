require 'rails_helper'

RSpec.describe Author, type: :model do
  before(:each) do
    @author = build(:author)
  end

  it "should be valid" do
    expect(@author).to be_valid
  end

  describe "name validation" do
    it "should not be valid without name" do
      @author.name = nil
      expect(@author).to_not be_valid
    end
  
    it "should not be valid if name length is greater than 50" do
      name = "a" * 51
      @author.name = name
      expect(@author).to_not be_valid
    end
  end
end