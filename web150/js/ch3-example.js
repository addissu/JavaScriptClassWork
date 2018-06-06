//immediatly invoked function expression 
//annonymos function 
(function () {
    //create hotel object
    //write the offer details 
    
    
    
    
    
    
    //use literal syntax
    var hotel = {name: "Park", roomRate: 240, discount: 15,
                offerPrice: function() {
                    var offerRate = this.roomRate * ((100 - this.discount )/ 100);
                    return offerRate;
                }
                };
       //create variables 
   var hotel, roomRate, specialRate;
            hotelName = document.getElementById('hotelName');
    roomRate= document.getElementById('roomRate');
                    specialRate = document.getElementById('specialRate');
    hotelName.textContent = hotel.name;
                    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
                    specialRate.textContent = '$' hotel.offerPrice();
                    
                    var expireMsg;
                    var today;
                    var elends;
                    
                    function offerExpires(today){
                        //local to the function 
                        
                        var weekFromToday, day, date, month, year, dayNames,monthNames;
                        
                        //add 7 days from current time 
                        
                        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 1000);
                        
                        //create arrays for names of days of month
                        
                        dayNames = ['Sunday','Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
                        monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                        
                        day = dayNames[weekFromToday.getDay()];
                        date = weekFromToday.getDate();
                        month = monthNames[weekFromToday.getMonth()];
                        year = weekFromToday.getFullYear();
                        
                        //create message 
                        expireMsg = 'Offer exipres next ';
                        expireMsg += day + '</br>' + date + ' ' + month + ' ' + year; 
                        
                        return expireMsg;
                        
                    }
                    
                    
                    today = newDate(); 
                    elEnds = document.getElementById('offerEnds');
                    elEnds.innerHTML = offerExpires(today);
                    
                    
                    
 }());