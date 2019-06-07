jQuery ->
  documentHeight = $(document).height()
  if $('.blog-posts-pagination a').length > 0
    $(window).bindWithDelay 'scroll', ->
      more_posts_url = $('.blog-posts-pagination a.next').attr('href')
      if more_posts_url && $(window).scrollTop() > $(document).height() - $(window).height() - 520
        $.getScript(more_posts_url)
      return
    , 100
