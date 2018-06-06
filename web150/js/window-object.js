//create a var msg to show on the page 
var msg = '<h2>browser window</h2><p>width :' + 
    window.innerWidth + '</p>';
//find the height of the window and add to msg 
msg += '<p>height:' + window.innerHeight + '<p>';

//find the number of items in the browser history 

msg += '<h2>History</h2><p> items: ' + window.history.length + '</p>';

//create variable to pass msg through

var el = document.getElementById('info'); 
el.innerHTML = msg; //inner html allows html tag formatting 

//find location of current page 

alert('Current page: ' + window.location);