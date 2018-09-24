class BlogController < ApplicationController
  def index
    paginate_options = {page: params[:page], per_page: 6}
    if params[:query]
      @posts = Post.where('lower(title) LIKE lower(?)', "%#{params[:query]}%").order('created_at DESC').paginate(paginate_options)
    else
      @posts = Post.order('created_at DESC').paginate(paginate_options)
    end
  end
end
