angular
  .module('teamBuilder')
  .config(projectsRouter);

projectsRouter.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
function projectsRouter($locationProvider, $stateProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('projectsIndex', {
      url: '/projects/index',
      templateUrl: '/js/views/projects/index.html',
      controller: 'ProjectsIndexCtrl as projects'
    })
    .state('projectsNew1', {
      url: '/projects/new/part1',
      templateUrl: '/js/views/projects/newPart1.html'
    })
    .state('projectsNew2', {
      url: '/projects/new/part2',
      templateUrl: '/js/views/projects/newPart2.html'
    })
    .state('projectsNew3', {
      url: '/projects/new/part3',
      templateUrl: '/js/views/projects/newPart3.html'
    })
    .state('projectsShow', {
      url: '/projects/:projectId/show',
      templateUrl: '/js/views/projects/show.html'
    })
    .state('projectsEdit', {
      url: '/projects/:projectId/edit',
      templateUrl: '/js/views/projects/edit.html'
    });

  $urlRouterProvider.otherwise('/');
}
