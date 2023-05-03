//segunda pre-entrega en inglés pq me estoy tomando un cursito y me siento bilinnnngue

let parkName = prompt("enter the name of the amusement park:");
let numRides = prompt("enter the number of rides in the park:");
let ticketPrice = prompt("enter the price of a ticket:");

let ridesPerDay = Math.floor(numRides / 2.5);
let revenuePerDay = 0;
let parkInfo = {name: parkName, rides: numRides, ticketPrice: ticketPrice};


function addRevenue(revenue, price) {
  return revenue + price;
}
revenuePerDay = addRevenue(revenuePerDay, ticketPrice * 100);


let infoString = `welcome to ${parkInfo.name}! we have ${parkInfo.rides} rides and the ticket price is $${parkInfo.ticketPrice}.`;


let ridesWithRestrictions = Math.floor(numRides * 0.2);


let rideNames = ["roller coaster", "carousel", "ferris wheel", "teacups", "water ride"];


let rideWithLongestName = rideNames.find(function(ride) {
  return ride.length > 10;
});


let popularRides = rideNames.filter(function(ride) {
  return ride !== "teacups";
});


alert(`on an average day, we have about ${ridesPerDay} rides operating in ${parkInfo.name} and earn $${revenuePerDay} in revenue.`);
alert(infoString);
alert(`approximately ${ridesWithRestrictions} of our rides have restrictions.`);
alert(`the ride with the longest name is ${rideWithLongestName}.`);
alert(`our popular rides include ${popularRides.join(", ")}.`);



//primera pre-entrega
// function coffeeOrder() {
//     let order = "";
//     let totalPrice = 0;
  
//     while (order !== "salir") {
//       order = prompt(
//         "bienvenidx al cafetero, escribe tu orden del día (espresso, latte, cappuccino, americano, salir):"
//       );
  
//       switch (order) {
//         case "espresso":
//         case "espreso":
//           totalPrice += 45.50;
//           alert("buena elección; tu espresso está siendo preparado :)");
//           break;
  
//         case "latte":
//           totalPrice += 63.00;
//           alert("gran manera de comenzar el día; tu latte está siendo preparado :)");
//           break;
  
//         case "cappuccino":
//         case "capuchino":
//         case "cappuchino":
//         case "capuccino":
//           totalPrice += 72.50;
//           alert("espumoso, dulce y fresco; tu cappuccino está siendo preparado :)");
//           break;
  
//         case "americano":
//           totalPrice += 54.00;
//           alert("recibiendo bien el día; tu americano está siendo preparado :)");
//           break;
  
//         case "salir":
//           alert("gracias por tu preferencia!");
//           break;
  
//         default:
//           alert("lo sentimos, de momento no tenemos disponible esa opción");
//           break;
//       }
//     }
  
//     alert("tu total es de $" + totalPrice.toFixed(2) + " mxn. vuelve pronto!");
//   }
  
//   coffeeOrder();