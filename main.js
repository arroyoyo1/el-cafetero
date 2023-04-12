function coffeeOrder() {
    let order = "";
    let totalPrice = 0;
  
    while (order !== "salir") {
      order = prompt(
        "bienvenidx al cafetero, escribe tu orden del día (espresso, latte, cappuccino, americano, salir):"
      );
  
      switch (order) {
        case "espresso":
        case "espreso":
          totalPrice += 45.50;
          alert("buena elección; tu espresso está siendo preparado :)");
          break;
  
        case "latte":
          totalPrice += 63.00;
          alert("gran manera de comenzar el día; tu latte está siendo preparado :)");
          break;
  
        case "cappuccino":
        case "capuchino":
        case "cappuchino":
        case "capuccino":
          totalPrice += 72.50;
          alert("espumoso, dulce y fresco; tu cappuccino está siendo preparado :)");
          break;
  
        case "americano":
          totalPrice += 54.00;
          alert("recibiendo bien el día; tu americano está siendo preparado :)");
          break;
  
        case "salir":
          alert("gracias por tu preferencia!");
          break;
  
        default:
          alert("lo sentimos, de momento no tenemos disponible esa opción");
          break;
      }
    }
  
    alert("tu total es de $" + totalPrice.toFixed(2) + " mxn. vuelve pronto!");
  }
  
  coffeeOrder();