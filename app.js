(function() {
  var app = angular.module('tutorialStore', []);
  app.controller('TabController', function(){
    this.tutorial = tutorials;
  });

/*
  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });
*/

  var tutorials = [
	{
		"url": "http://tutorials.jenkov.com/angularjs/index.html",
		"title": "AngularJS Tutorial",
		"image": "http://tutorials.jenkov.com/images/layout/small-portrait_mini.jpg",
		"author": "Jakob Jenkov"
	},
	{
		"url": "http://tutorialzine.com/2013/08/learn-angularjs-5-examples/",
		"title": "Learn AngularJS With These 5 Practical Examples",
		"image": "http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",
		"author": "JMartin Angelov"
	},
	{
		"url": "https://github.com/angular-app/angular-app",
		"title": "AngularJS CRUD application demo",
		"image": "http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",
		"author": "angular-app"
	},
	{
		"url": "https://www.airpair.com/angularjs/building-angularjs-app-tutorial",
		"title": "AngularJS Tutorial - Building a Web App in 5 minutes",
		"image": "https://0.gravatar.com/avatar/8ef3e73105c63fcac882115c9ad346f2?s=100",
		"author": "Nick Kaye"
	},
	{
		"url": "http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app",
		"title": "A Step-by-Step Guide to Your First AngularJS App",
		"image": "http://www.toptal.com/uploads/user/photo/256/small_1233500_508166272610903_1884720025_n.jpg",
		"author": "Raoni Boaventura"
	},
	{
		"url": "http://ng-learn.org/tags/workshop.html",
		"title": "Angularjs -- Workshop",
		"image": "http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",
		"author": "Santiago Esteva"
	},
	{
		"url": "https://www.youtube.com/watch?v=tnXO-i7944M",
		"title": "AngularJS in 20ish Minutes ",
		"image": "http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",
		"author": "Dan Wahlin"
	},
	{
		"url": "http://www.microsoftvirtualacademy.com/training-courses/introduction-to-angularjs",
		"title": "Introduction to AngularJS",
		"image": "https://irodriguezm.files.wordpress.com/2009/12/logo_mva.png",
		"author": "Microsoft Virtual Academy"
	}	
];
})();
