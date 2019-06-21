require 'rails_helper'

RSpec.describe 'Blogpost feature' do
  # it 'displays blogpost and post pages' do
  #   create(:post, title: 'Post', body: 'SUPER BODY')
  #   visit blog_url
  #   expect(page).to have_content('Post')
  #   click_on('Read More');
  #   expect(page).to have_content('SUPER BODY')
  # end

  it 'displays 8 post maximum' do
    9.times do
      create(:post)
    end
    visit blog_url
    expect(page).to have_selector('.blog-post', count: 8)
  end

  it 'displays pagination if there are more posts' do
    10.times do
      create(:post)
    end
    visit blog_url
    expect(page).to have_selector('.blog-posts-pagination')
    find('.next').click
    expect(page).to have_selector('.blog-post', count: 2)
    expect(page).to have_selector('span.next')
  end

  it 'not display pagination if there are not enough posts' do
    5.times do
      create(:post)
    end
    visit root_url(subdomain: 'blog')
    expect(page).to have_no_selector('.blog-posts-pagination')
  end
end