import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../services/config/config.service';
import { UserService } from '../../services/user/user.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})
export class LoginComponent implements OnInit {
	loginForm = {
		userName: '',
		password: ''
	};
	constructor(private router: Router, private userService: UserService, private toastr: ToastrService) {
	}

	// Check if user already logged in
	ngOnInit() {
		if (localStorage.getItem('userData')) {
			this.router.navigate(['/']);
		}
	}

	// Initicate login
	doLogin() {
		const login = this.userService.doLogin(this.loginForm);
		this.success(login);
	}

	// Login success function
	success(data) {
		if (data.code === 200) {
			localStorage.setItem('userData', JSON.stringify(data.data));
			this.router.navigate(['/']);
			this.toastr.success('Success', 'Logged In Successfully');
		} else {
			this.toastr.error('Failed', 'Invalid Credentials');
		}
	}

}
