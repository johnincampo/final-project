//Step 1 Sets class to active//

$('ul.nav li').click(function() {
    $(this).addClass('active').siblings('li').removeClass('active');
});

//Step 2 Option Arrays/

var vehicleOptions = [
  {choice: 'cadenza', price: '35000'},
  {choice: 'forte', price: '20000'},
  {choice: 'optima', price: '29050'},
  {choice: 'sedona', price: '38650'},
  {choice: 'soul', price: '42200'}
];

var colorOptions = [
  {choice: 'black', price: '50'},
  {choice: 'white', price: '100'},
  {choice: 'silver', price: '250'}
];

var packageOptions = [
  {choice: 'Rear Camera', price: '150'},
  {choice: 'LED Positioning Light', price: '150'},
  {choice: 'Rear Camera and LED PositioningLight', price: '200'}
];

//Step 3 car selection holder/
var carSelection = {
	vehicle: {choice:'Not Selected', price: 0},
	color: {choice:'Not Selected', price: 0},
	package: {choice:'Not Selected', price: 0},
}
console.log(carSelection.vehicle.choice);
console.log(carSelection.vehicle.price);
//Step 4 Display html in sidebar/

 displayPanelContent('vehicle');


$('ul.nav li').on('click', function() {

  var tabChoice = $(this).data('tab');
  $('#options-display').val('');

  displayPanelContent(tabChoice);

});


function displayPanelContent (contentSelection) {
  console.log(contentSelection)
  var source = $('#' + contentSelection + '-options-template').html();
  var template = Handlebars.compile(source);

  switch(contentSelection) {
    case 'vehicle': 
    	console.log(contentSelection);
    	var context= {'vehicleOptions': vehicleOptions};
      break;
    case 'color': 
    	console.log(contentSelection);
        var context= {'colorOptions': colorOptions};
      break;
    case 'package':
    var context= {'packageOptions': packageOptions};
      break;
    case 'summary': 
    var context={'carSelection': carSelection};
  }
  var html= template(context);
  $('#options-display').html(html);
  addClickHandlers(contentSelection);
}

function addClickHandlers(contentSelection) {
	// case setatement for each set of tab-specific click handlers
$('.vehicle-option').on('click', function() {
carSelection.vehicle.choice = $(this).data('option');
carSelection.vehicle.price = $(this).data('price');
$('.cost-display').html('$' + (carSelection.package.price+carSelection.vehicle.price+carSelection.color.price));
$('.vehicle-display').attr("src", "assets/" + carSelection.vehicle.choice +".jpg");
});
$('.color-option').on('click', function() {
carSelection.color.choice = $(this).data('option');
carSelection.color.price = $(this).data('price');
$('.cost-display').html('$' + (carSelection.package.price+carSelection.vehicle.price+carSelection.color.price));
$('.vehicle-display').attr("src", "assets/" + carSelection.vehicle.choice + "-"+carSelection.color.choice+".jpg");
});
$('.package-option').on('click', function() {
carSelection.package.choice = $(this).data('option');
carSelection.package.price = $(this).data('price');
$('.cost-display').html('$' + (carSelection.package.price+carSelection.vehicle.price+carSelection.color.price));
});
}