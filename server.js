var express = require('express');
var app = express();
var moment = require('moment');
app.get('/:timeparam', function(req, res){
  var xDate=req.params.timeparam;
  var xTestDate = moment(xDate, 'MMMM DD, YYYY', true);
  //if(xDate instanceof Date){
    if (!xTestDate.isValid()){
      xTestDate = moment.unix(xDate);
    }
  //    var xUnix = Date.parse(xDate);
  //  var xOutput='{ "unix":' + xUnix + ', "natural":"' + xStrDate + '" }';
  //  var xOutput='{ "unix":null, "natural":null }';  
  if (!xTestDate.isValid()) {
    res.json({
      'humanReadable': null,
      'unix': null
    });
  }else{
    res.json({
      'humanReadable': xTestDate.format('MMMM DD, YYYY'),
      'unix': xTestDate.format('X')
  });
 }
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
