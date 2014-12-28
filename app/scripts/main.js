require.config({
  shim: {
  	"backbone": {
  		deps: ["../bower_components/underscore/underscore", "jquery"],
  		exports: "Backbone"
  	}
  },

  paths: {
    jquery: 'vendor/jquery.min',
    backbone: '../bower_components/backbone/backbone',
    prettify: '../bower_components/google-code-prettify/src/prettify'
  }
});

require(['views/app', 'prettify'], function(AppView) {
  window.App = {
    Vent: _.extend({}, Backbone.Events)
  };
  
  new AppView();
});