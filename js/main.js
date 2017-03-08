
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
var Car = Backbone.Model.extend();

var Vehicles = Backbone.Collection.extend({
  model: Car
});

var CarView = Backbone.View.extend({
  tagName: "li",
  className: "vehicle",
  attributes: {
    "data-color": ""
  },

  render: function(){
    this.$el.html(this.model.get("registrationNumber"));

    return this;
  }
});

var CarsView = Backbone.View.extend({
  render: function(){
    this.model.each(function(car){
      var carView = new CarView({ model: car });
      this.$el.append(carView.render().$el);
    });
  }
});

var vehicles = new Vehicles([
  new Car({ registrationNumber: "XLI887" }),
  new Car({ registrationNumber: "ZNP123" }),
  new Car({ registrationNumber: "XUV456" })
]);

var carsView = new CarsView({ el: "#cars", model: vehicles });
carsView.render();
