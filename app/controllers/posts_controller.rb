class PostsController < ApplicationController
  before_action :set_post, only: [:show]
  before_action :set_meta_tags, only: [:show]

  def show
  end

  private
  
  def set_post
    @post = Post.friendly.find(params[:id])
  end

  def set_meta_tags
    meta_tags = helpers.generate_meta_tag_from_post(@post)
    @meta_tags = merge_into_default_meta_tags(meta_tags)
  end
end
