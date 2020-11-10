let http = require('http')

http.createServer(function (istek, cevap) {
  cevap.writeHead(200, {'Content-Type': 'text/html'});
  cevap.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  cevap.write('<input type="file" name="filetoupload"><br>');
  cevap.write('<input type="submit">');
  cevap.write('</form>');
  return cevap.end();
}).listen(4321); 
