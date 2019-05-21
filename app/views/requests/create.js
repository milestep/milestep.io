$.each($('.content-page-7 input'), function( i, item ) {
  switch(item.name) {
    case 'name':
    case 'email':
    case 'message': item.value = ''; break
    default: return
  }
})

$.notiny({ text: "Mail sent!", position: 'right-top' })
