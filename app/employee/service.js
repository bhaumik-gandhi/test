(function(){

	var app = angular.module('employee');

	app.factory("UsersService", function() {
	 	var users = [
	 		{
	 			name:"Peter", 
	 			age :25
	 		},
	 		{
	 			name: "ishan",
				age: 27
	 		}
	 	];
		return {
			add: function() {
			return users;
			}
		
		};
	});

	// app.provider('UsersService', function(){
	// 	var _MIN_AGE = 21;
	// 	var _users = [
	// 					{
	// 						name: "bhaumik",
	// 						age: 25
	// 					},
	// 					{
	// 						name: "ishan",
	// 						age: 27
	// 					}
	// 				];

	// 	return {
	// 		$get: function(){
	// 			return {					
	// 				add: function(_user){
	// 					if(!(_user.age >= _MIN_AGE )){
	// 						return false;
	// 					}

	// 					_users.push(_user);
	// 					return true;
	// 				}
	// 			};
	// 		},
	// 		setMinAge: function(_age){
	// 			_MIN_AGE = _age;
	// 		}
	// 	};
	// });

})();