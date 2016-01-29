$(document).on('ready', function() {
	// ready
});

var app = app || {};

app.SingleModel = Backbone.Model.extend({
	defaults: {
		name: 'User Name'
	}
});