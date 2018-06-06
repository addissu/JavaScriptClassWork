//create templete 

function Hotel(name, rooms,booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked
    
    
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    };
}

//create two hotel objects 

var queyHotel = new Hotel('Quey',40,25 );

var parkHotel = new Hotel('Park', 120,77);
//update html 

var details1 = queyHotel.name + 'rooms';
//accumulate strings in details1
details1 += queyHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + 'rooms';
details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;