module ApplicationHelper
  def scrolling_button(params=nil, &block)
    options = {
      offset_top: '50%',
      background: 'transparent'
    }.merge(params || {})

    wrapper_styles = "background: #{options[:background]}; top: #{options[:offset_top]}"

    content_tag :div, class: 'scroller-btn-container' do
      content_tag :div, class: 'scrolling-button', style: wrapper_styles do
        content_tag :div, class: 'text-wrapper' do
          yield block
        end
      end
    end
  end
end
