angular
  .module('teamBuilder')
  .config(freelancerRouter);

freelancerRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

function freelancerRouter($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('freelancersRegister', {
      url: '/freelancers/register',
      templateUrl: '/js/views/freelancers/register.html',
      controller: 'FreelancersNewCtrl as freelancers'
    })
    .state('freelancersLogin', {
      url: '/freelancers/login',
      templateUrl: '/js/views/freelancers/login.html'
    })
    .state('freelancersShow', {
      url: '/freelancers/:freelancerId',
      templateUrl: '/js/views/freelancers/show.html'
    })
    .state('freelancersEdit', {
      url: '/freelancers/:freelancerId/edit',
      templateUrl: '/js/views/freelancers/edit.html'
    });

  $urlRouterProvider.otherwise('/');
}
