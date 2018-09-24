module BlogHelper
  def cut_text(text, length)
    if text.length > length
      text = text[0..(length - 3)] + "..."
    end
    return text
  end
  
  def custom_pagination_options
    options = { 
      renderer: custom_renderer, 
      previous_label: image_tag('blog/previous_label'), 
      next_label: image_tag('blog/next_label'),
      inner_window: 1,
      outer_window: 0
    } 
  end

  def custom_renderer
    Class.new(WillPaginate::ActionView::LinkRenderer) do
      def container_attributes 
        { class: 'blog-posts-pagination' }
      end

      def page_number(page)
        if page == current_page
          tag(:div, tag(:span, page), class: 'current page' )
        else
          tag(:div, link(page, page, rel: rel_value(page)), class: 'page' )
        end
      end
    
      def gap
        text = @template.will_paginate_translate(:page_gap) { '&hellip;' }
        %(<span class="pagination_gap">#{text}</span>)
      end
    
      def previous_page
        num = @collection.current_page > 1 && @collection.current_page - 1
        previous_or_next_page(num, @options[:previous_label], 'previous')
      end
    
      def next_page
        num = @collection.current_page < total_pages && @collection.current_page + 1
        previous_or_next_page(num, @options[:next_label], 'next')
      end
    
      def previous_or_next_page(page, text, classname)
        if page
          link(text, page, :class => classname)
        else
          tag(:span, text, :class => classname)
        end
      end

    end
  end

end
