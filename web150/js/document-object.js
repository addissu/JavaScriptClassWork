//create var msg to store what will show on the page

var msg = '<p><b>Title: </b>' + document.title + '</p><br>';
msg += '<p><b> URL: </b>' + document.URL + '</p></br>';

msg += '<p><b> last modified: </b>' + document.lastModified + '</p></br>';

//display msg on page 

var el = document.getElementById('info');
el.innerHTML = msg;