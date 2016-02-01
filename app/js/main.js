require.config({
	paths: {
		'jquery': './libs/jquery/dist/jquery',
		'underscore': './libs/underscore-amd/underscore-min',
		'backbone': './libs/backbone-amd/backbone-min',
		'bootstrap': './libs/bootstrap/dist/js/bootstrap.min.js'
	}
});


require(['./views/app'], function( AppView ) {
	new AppView;
});