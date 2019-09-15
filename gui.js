const $ = require('jquery')
$('#ret').on('click',()=>{
  console.log('hello')
  $("#enterdata").hide()
  $('#retrive').show()
})
$('#ent').on('click',()=>{
  console.log('hello')
  $("#retrive").hide()
  $('#enterdata').show()
})
