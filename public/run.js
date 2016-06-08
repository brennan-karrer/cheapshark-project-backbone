var curl;
(function () {

	curl({
		main: 'cheapSharkApp',
		packages: {
			// Application package
			cheapSharkApp: { location: 'app' },
			
			// Third-party packages
			curl: { location: 'libs/curl/src/curl' },
			jquery: { location: 'libs/jquery/dist/jquery', main: '.' },
			Backbone: { location: 'libs/backbone-amd/backbone', main: '.' },
			underscore: { location: 'libs/lodash/lodash', main: '.' }
		}
	});

}());