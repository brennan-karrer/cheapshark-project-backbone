define(function(require) {
    var CheapSharkModel = require('./models/cheap-shark-model');
    var CheapSharkView = require('./views/cheap-shark-view');
    var $ = require('jquery');
    
    /**
        Instantiate a new Application Model.
        Instantiate a new Application View and set the model equal to the Application Model.
    */
    var appModel = new CheapSharkModel();
    var appView = new CheapSharkView({
        model: appModel
    });
});