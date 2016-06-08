define(function(require) {
    var Backbone = require('Backbone');
    
    var CheapSharkModel = Backbone.Model.extend({
        urlRoot: 'http://www.cheapshark.com/api/1.0/deals',
        url: function() {
            return this.urlRoot;
        }
    });
    
    return CheapSharkModel;
});