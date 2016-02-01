define(['backbone'], function( backbone ) {
	var app = app || {};

	app.SingleView = Backbone.View.extend({
		initialize: function() {
			console.log('Works');
		}
	});

	return app.SingleView;

});