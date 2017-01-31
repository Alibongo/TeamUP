angular
  .module('teamBuilder')
  .controller('FreelancersNewCtrl', FreelancersNewCtrl);

FreelancersNewCtrl.$inject = ['$http','$state'];
function FreelancersNewCtrl($http, $state) {
  const vm = this;

  vm.freelancersCreate = function freelancersCreate() {
    return $http
      .post('http://localhost:3000/api/freelancers/register', vm.freelancer)
      .then(() => {
        $state.go('freelancersShow', {id: '588fb4dcd7f62707a19d4772'});
      });
  };

}
