Package.describe({
	summary: "BAFA - latest versions of Bootstrap, Animate.css, and Font-Awesome"
});

Package.on_use(function(api){
	api.use('jquery', 'client');
	api.add_files([
		'lib/bootstrap-2.3.2/bootstrap.min.css',
		'lib/bootstrap-2.3.2/bootstrap.min.js',
		'lib/font-awesome-3.2.0/font/fontawesome-webfont.eot',
		'lib/font-awesome-3.2.0/font/FontAwesome.otf',
		'lib/font-awesome-3.2.0/font/fontawesome-webfont.ttf',
		'lib/font-awesome-3.2.0/font/fontawesome-webfont.woff',
		'lib/font-awesome-3.2.0/font/fontawesome-webfont.svg',
		'lib/font-awesome-3.2.0/css/font-awesome.css',
		'lib/animate.css/animate.min.css'
	], 'client');
});