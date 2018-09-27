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
    meta_tags = generate_meta_tag_from_post(@post)
    @meta_tags = merge_into_default_meta_tags(meta_tags)
  end

  def get_html_text_for_meta_tag(raw_html)
    Nokogiri::HTML(raw_html).css('p').first.text
  end

  def generate_meta_tag_from_post(post)
    {
      twitter_description: helpers.cut_text(ActionController::Base.helpers.strip_tags(get_html_text_for_meta_tag(post.body)), 300),
      twitter_title: post.title,
      twitter_image: ActionController::Base.helpers.image_url(post.main_image),
      og_title: post.title,
      og_type: "article",
      og_description: helpers.cut_text(ActionController::Base.helpers.strip_tags(get_html_text_for_meta_tag(post.body)), 300),
      og_url: post_url(post),
      og_site_name: "MileStep | Web &amp; Mobile App Development Company",
      og_image: ActionController::Base.helpers.image_url(post.main_image)
    }
  end
end
