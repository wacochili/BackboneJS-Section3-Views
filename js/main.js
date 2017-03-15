
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

// Car singular
var Car = Backbone.Model.extend();

var CarView = Backbone.View.extend({

  render: function(){
    this.$el.html(this.model.get("registrationNumber"));

    return this;
  }
});

var car = new Car({ registrationNumber: "SLA987" });

var carView = new CarView({ el: "#container", model: car });
// carView.render();

// Cars plural
var Vehicles = Backbone.Collection.extend({ 
	model: Car,
 
});

var CarsView = Backbone.View.extend({
  render: function(){
    var self = this;

    this.model.each(function(car){
      var carView = new CarView({ model: car });
      self.$el.append(carView.render().$el);
    });
  }
});

var vehicles = new Vehicles([
	new Car({ registrationNumber: "XLI887", color: "Blue" }),
	new Car({ registrationNumber: "ZNP123", color: "Blue" }),
	new Car({ registrationNumber: "XUV456", color: "Gray" })
]);

var carsView = new CarsView({ el: "#cars", model: vehicles });
carsView.render();
