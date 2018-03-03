angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.latestNews', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/latestNews.html',
        controller: 'latestNewsCtrl'
      }
    }
  })

  .state('tabsController.aboutUs', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/aboutUs.html',
        controller: 'aboutUsCtrl'
      }
    }
  })

  .state('tabsController.connectWithUs', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/connectWithUs.html',
        controller: 'connectWithUsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('founderDesk', {
    url: '/page5',
    templateUrl: 'templates/founderDesk.html',
    controller: 'founderDeskCtrl'
  })

  .state('services', {
    url: '/page6',
    templateUrl: 'templates/services.html',
    controller: 'servicesCtrl'
  })

  .state('gallery', {
    url: '/page7',
    templateUrl: 'templates/gallery.html',
    controller: 'galleryCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});