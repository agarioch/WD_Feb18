(function (window) {
    'use strict'
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myTruck = new Truck('serenity', new DataStore());
    window.myTruck = myTruck;

    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));

    console.log(formHandler);

    var slider = document.getElementById("strengthLevel");
    var output = document.getElementById("value");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
        if (this.value < 30) {
            output.style.color = '#005eb8';
        }
        if (this.value < 70 && this.value > 30) {
            output.style.color = 'rgb(255, 127, 80)';
        }
        if (this.value > 70) {
            output.style.color = 'rgb(239, 70, 75)';
        }
    }

})(window);