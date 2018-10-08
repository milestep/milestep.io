module PostsHelper
  def getHtmlTextForMetaTag(raw_html)
    html_doc = Nokogiri::HTML(raw_html)
    paragraph = html_doc.css('p').first.text
  end
end