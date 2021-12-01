$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
//Get inputs
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };

        //check price
        let price, totalPrice;
        switch (flavour) {
            case flavour = "Veggie Pizza":
                switch (size) {
                    case size = "Normal":
                        price = 699;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 999;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "Quaity":
                        price = 1999;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                }
                break;
            case flavour = "Pepperoni Pizza":
                switch (size) {
                    case size = "regular":
                        price = 699;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 699;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "Quality":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                }
                break;
            case flavour = "periperi":
                switch (size) {
                    case size = "regular":
                        price = 699;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 999;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                }
                break;
            case flavour = "BBQ Chicken Pizza":
                switch (size) {
                    case size = "regular":
                        price = 699;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 999;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "Quality":
                        price = 1999;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                }
                break;
            case flavour = "Meat Pizza":
                switch (size) {
                    case size = "Normal":
                        price = 699;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 999;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "large":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "regular":
                        price = 300;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 999;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "Quality":
                        price = 1200;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                }
                break;
            case flavour = "mushroom":
                switch (size) {
                    case size = "regular":
                        price = 699;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "medium":
                        price = 999;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "Quality":
                        price = 1999;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                }
                break;
            case flavour = "Margherita Pizza":
                switch (size) {
                    case size = "Normal":
                        price = 699;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 180;
                        } else {
                            totalPrice = (price * number) + 280;
                        }
                        break;
                    case size = "medium":
                        price = 999;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                    case size = "Quality":
                        price = 1999;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 199;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 250;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 280;
                        } else {
                            totalPrice = (price * number) + 180;
                        }
                        break;
                }
                break;
        }
        switch (topping) {
            case topping = "potato":
                totalPrice = totalPrice + 35;
                break;
            case topping = "sausage":
                totalPrice = totalPrice + 80;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 80;
                break;
            case topping = "gcapsicum":
                totalPrice = totalPrice + 80;
                break;
            case topping = "olives":
                totalPrice = totalPrice + 120;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 220;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 220;
                break;

        }

        //Execute order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder); // test func

        //create a new object
        // let myOrder = JSON.stringify(JSON.parse(newOrder));

        //Write to the order
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });


    //Pick Up
    $(".delivernot").click(function () {

    });

    //Scrollify
    $(function () {
        $.scrollify.move('#sum-order');
    });
});
