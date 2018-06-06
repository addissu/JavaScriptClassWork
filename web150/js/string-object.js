//create a string to use in this example 

var saying = 'Home sweet home';

var msg = '<h2>length</h2><p>' + saying.length + '</p>';

//display the msg on the page 
//convert string to uppercase 
msg += '<h2>upper case</h2><p>' + saying.toUpperCase() + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;

msg += '<h2>character index </h2><p>' + saying.charAt(12) + '</p>';

msg += '<h2>upper case</h2><p>' + saying.toUpperCase() + '</p>';

//find the charactors in the index range 
msg += '<h2>character index 8-14 </h2><p>' + saying.lastIndexOf('e') + '</p>'+ saying.substring(8,14);

//replace the first instance of 'me' with 'w'
msg += '<h2>character index 8-14 </h2><p>' + saying.replace('me', 'w') + '</p>';

var el = document.getElementById('info');
el.innerHTML = msg;






