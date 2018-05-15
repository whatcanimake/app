var express = require('express');
var app = express();
var cors = require('cors');
var proxy = require('http-proxy-middleware');


app.use(express.static("" + __dirname));
app.use(cors());

app.use('/backend',
  proxy({target: "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3",
    changeOrigin: true,
    logLevel: 'debug'
  })
);



app.listen(8000, () => console.log('Example app listening on port 8000!'));


// app.listen(port, function() {
//   console.log("Listening at " + port);
// });