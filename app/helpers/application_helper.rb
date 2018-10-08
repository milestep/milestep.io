module ApplicationHelper
  def scrolling_button(params=nil, &block)
    options = {
      offset_top: '50%',
      background: 'transparent',
      border_color: '#cbcbcb'
    }.merge(params || {})

    wrapper_styles = "
      top: #{options[:offset_top]};
      background: #{options[:background]};
      border-color: #{options[:border_color]}
    ".squish

    content_tag :div, class: 'scroller-btn-container' do
      content_tag :div, class: 'scrolling-button', style: wrapper_styles do
        content_tag :div, class: 'text-wrapper' do
          yield block
        end
      end
    end
  end
end
