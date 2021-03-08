function getCart() {
    pizzaSize = "";
    pizzaCrust = "";
    pizzaTopping = "";
    var total = 0;
    var sizeTotal = 0;
    var sizaArray = document.getElementById("pizza-crust");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizaArray[i].value;
            pizzaCrust = pizzaCrust+selectedSize+"<br>";
        }
    }
    if (selectedSize === "small"){
        sizeTotal = 6;
        pizzaSize = pizzaSize+sizeTotal+"<br>";
    } else if (selectedSize === "medium") {
        sizeTotal = 10;
        pizzaSize = pizzaSize+sizeTotal+"<br>";
    } else if (selectedSize === "large") {
        sizeTotal = 14;
        pizzaSize = pizzaSize+sizeTotal+"<br>";
    }
    total = sizeTotal;
    getCrust(total, pizzaSize, pizzaTopping, pizzaCrust);
};
function getCrust(total, pizzaSize, pizzaTopping, pizzaCrust) {
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementById("pizza-Crust");
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
			pizzaCrust = pizzaCrust + selectedCrust + "<br>";
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	total = (total + crustTotal);
	pizzaSize = pizzaSize + crustTotal + "<br>";
	getSize(Total,pizzaSize,pizzaTopping);
};