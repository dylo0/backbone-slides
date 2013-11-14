define(['backbone', 'models/slide'], function(Backbone, SLideModel) {
	var Slides = Backbone.Collection.extend({
		model: SLideModel
	});

	return Slides;
}]);