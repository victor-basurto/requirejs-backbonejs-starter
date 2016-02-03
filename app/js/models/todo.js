define(['backbone'], function( Backbone ) {
	var app = app || {};

	app.TodoModel = Backbone.Model.extend({
		defaults: {
			content: 'Empty Todo'
		},
		initialize: function() {
			console.log('Model initialized');
		}
	});

	return app.TodoModel;
});