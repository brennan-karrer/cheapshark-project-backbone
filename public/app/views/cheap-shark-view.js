define(function(require) {
    var Backbone = require('Backbone');
    var $ = require('jquery');
    var _ = require('underscore');
    
    var CheapSharkView = Backbone.View.extend({
        el: $('body'),
        
        /**
            Upon successfully fetching the data, execute the calculateScore function on the 
            set of deals and execute the render function to display the data in index.html.
        */
        initialize: function() {
            var self = this;
            
            _.bindAll(this, 'render');
            this.model.on('change', this.render);
            this.model.fetch({
                success: function(data) {
                    self.calculateScore(data.attributes);
                    self.render();
                }
            });
        },
        
        /**
            Upon fetching the data from the model we need to calculate the score based on the
            metacriticScore. For the array of deals, add a new key value pair pertaining to the
            calculated score for each individual deal in the array.
            
        
            @method calculateScore
            @param  deals[]
        */
        calculateScore: function(deals) {
            for (var deal in deals) {
                /* Parse the metacriric score to ensure it is an integer */
                deals[deal].metacriticScore = parseInt(deals[deal].metacriticScore);
                deals[deal].score = Math.round(deals[deal].metacriticScore / 10) * 10;
            }
        },
        
        /**
            Rendering the view is going to do several things. Set the array of deals to be equal
            to the model's attributes (or JSON data). In order to display the array of deals in
            ascending order by title, execute a _.sortBy on the array set and store it in a new
            sorted_deals array.
            
            Create an array of range numbers to be passed back to the template to determine which
            range each deal falls into.
            
            Declare a new template that will hook up to the script with an ID of #deals_template in
            the index.html file. Bind the template, with the data being passed to it, to the element
            declared earlier which is the body tag.
        */
        render: function() {
            var deals = this.model.attributes;
            var sorted_deals = _.sortBy(deals, function(deal) {
                return deal.title;                
            });
            
            var range_numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
                        
            var template = _.template($('#deals_template').html());
            this.$el.html(template({deals: sorted_deals, range_numbers: range_numbers}));
            
            return this;
        }
    });
    
    return CheapSharkView;
});