require.config({
	shim: {
		'bootstrap': {
			'deps': [ 'jquery' ]
		}
	},
	paths: {
		'jquery': './libs/jquery/dist/jquery',
		'underscore': './libs/underscore-amd/underscore-min',
		'backbone': './libs/backbone-amd/backbone-min',
		'bootstrap': './libs/bootstrap/dist/js/bootstrap.min.js'
	}
});


require([ './views/app', './models/todo' ], function( AppView, TodoModel ) {
	new AppView;
	var todoModel = new TodoModel();

	console.log('Content from the model: ' + todoModel.get('content'));
});