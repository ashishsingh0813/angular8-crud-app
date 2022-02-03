import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

	userCredentials: any;
	isUserLoggedIn = localStorage.getItem('userData') ? true : false;

	constructor() {
		this.userCredentials = JSON.parse(window.atob(localStorage.getItem("userInfo")))
		console.log(this.userCredentials)
	}

	doLogin(data) {
		if (data.userName === this.userCredentials.userName && data.password === this.userCredentials.password) {
			this.isUserLoggedIn = true;
			return {
				code: 200,
				message: "Login Successful",
				data: data
			};
		} else {
			return {
				code: 401,
				message: "Invalid Credentials",
				data: null
			};
		}
	}
}