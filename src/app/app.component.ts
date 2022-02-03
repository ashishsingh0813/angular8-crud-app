import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Angular 8 App';
	meetingList = [];

	constructor(private router: Router, private toastr: ToastrService, public userService: UserService) {
		//preparing data to save in local storage
		localStorage.setItem("userInfo", window.btoa(JSON.stringify({ userName: 'admin', password: 'admin' })))
		for (let index = 0; index < 15; index++) {
			var now = new Date();
			now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
			let data = {
				id: Math.floor((Math.random() * Math.random() * 9999)),
				firstName: "Test" + (index + 1),
				lastName: "App" + (index + 1),
				email: `${"test" + (index + 1)}@gmail.com`,
				phone: {
					dialCode: '+91',
					country: 'in',
					number: '99999' + Math.round(Math.random() * 100000)
				},
				address: "Test Address" + (index + 1),
				meetingTime: new Date(now).toISOString().substring(0, 16)
			}
			this.meetingList.push(data)
		}
		// Save meetings to localStorage
		localStorage.setItem('meetings', JSON.stringify(this.meetingList));

		setTimeout(() => {
			console.log(userService.isUserLoggedIn)
		}, 250);
	}

	// Logout User
	logOut() {
		this.userService.isUserLoggedIn = false;
		localStorage.removeItem('userData');
		this.toastr.success('Success', "Logged Out Successfully");
		this.router.navigate(['/login']);
	}
}
