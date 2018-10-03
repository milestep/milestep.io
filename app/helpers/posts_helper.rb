module PostsHelper
  def get_html_text_for_meta_tag(raw_html)
    Nokogiri::HTML(raw_html).css('p').first.text
  end
end