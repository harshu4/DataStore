const pouchdb = require('pouchdb')
const A = require('jquery')

var db = new pouchdb('data')

A("#enter").on('click',()=>{

var data = {
    _id:A('#gst').val(),

    name: A('#name').val(),
    address : A('#address').val(),
    phone : A('#phone').val(),
    email :A('#email').val(),
}
db.put(data,(err,response)=>{
  if (!err){
    alert("Data Entered")


  }
})
window.location.reload()
})
A("#signini").on('click',()=>{
  var id = A("#gstno").val()
  db.get(id,(err,data)=>{
    if(!err){
      console.log('hello')
      A('#table').append("<tr><td>"+data['name']+"</td><td>"+data['address']+"</td><td>"+data['phone']+"</td><td>"+data['_id']+"</td></tr>")
    }
    else{
      console.log(err)
    }
  })
})
