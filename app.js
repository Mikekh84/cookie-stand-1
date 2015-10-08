function store (location, minCustomer, maxCustomer,avgCookieCust)
{
    this.location = location;
    this.minCustomer =  minCustomer;
    this.maxCustomer = maxCustomer;
    this. avgCookieCust = avgCookieCust;
    this.randCustHour = function(){return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer};


}
var PikeMarketPlace = new store('PikeMarketPlace', 17, 88, 5.2)
var SeaTacAirport = new store('SeaTacAirport', 6, 44, 1.2)
var SouthCenterMall = new store('SouthCenterMall', 11, 38, 1.9)
var BellevueSquare = new store('BellevueSquare', 20, 48, 3.3)
var Alki = new store('Alki', 3, 24, 2.6)


function createTable(store, id){
     var hours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
     var awsomeList = document.getElementById(id);
     for (var i = 0; i<hours.length; i++) {
     var hourlyCookies = Math.floor(store.randCustHour() * store.avgCookieCust);
     var item = document.createElement ('td');
     item.appendChild(document.createTextNode(hourlyCookies));
     awsomeList.appendChild(item);

        }
    return awsomeList;
    }
createTable(PikeMarketPlace, 'PikeMarketPlace');
createTable(SeaTacAirport, 'SeaTacAirport');
createTable(SouthCenterMall, 'SouthCenterMall');
createTable(BellevueSquare, 'BellevueSquare');
createTable(Alki, 'Alki');
