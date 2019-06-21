module Blog
  class BlogController < ApplicationController
    def index
      paginate_options = {page: params[:page], per_page: 8}
      if params[:query]
        @posts = Post.where('lower(title) LIKE lower(?)', "%#{params[:query]}%").order('created_at DESC').paginate(paginate_options)
      else
        @posts = Post.order('created_at DESC').paginate(paginate_options)

        respond_to do |format|
          format.js
          format.html
        end
      end
    end
  end
end

