module PostsHelper
  def get_html_text_for_meta_tag(raw_html)
    html_doc = Nokogiri::HTML(raw_html)
    paragraph = html_doc.css('p').first.text
  end
end