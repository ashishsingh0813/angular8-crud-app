import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { ToastrService } from 'ngx-toastr';
import { Meeting } from 'src/app/models/meeting.model';
import { routerTransition } from '../../../services/config/config.service';
import { MeetingService } from '../../../services/meeting/meeting.service';



@Component({
	selector: 'app-meeting-add',
	templateUrl: './meeting-add.component.html',
	styleUrls: ['./meeting-add.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class MeetingAddComponent {

	// create meetingDetail of type Meeting
	meetingDetail: Meeting = new Meeting();
	id: number;
	submitted: boolean = false;

	constructor(private router: Router, private route: ActivatedRoute, private meetingService: MeetingService, private toastr: ToastrService) {

		// Check for route params
		this.route.params.subscribe(params => {
			this.id = params['id'];
			// check if ID exists in route & call update or add methods accordingly
			if (this.id && this.id !== null && this.id !== undefined) {
				this.getmeetingDetails(this.id);
			}
		});
	}

	public handleAddressChange(address: Address) {
		console.log(address)
	}

	// Submit meeting details form
	doRegister(form) {
		this.submitted = true;
		if (form.invalid) {
			return;
		}
		const meetingRegister = this.meetingService.doRegisterMeeting(this.meetingDetail, this.id);
		if (meetingRegister) {
			if (meetingRegister.code === 200) {
				this.toastr.success(meetingRegister.message, 'Success');
				this.router.navigate(['/']);
			} else {
				this.toastr.error(meetingRegister.message, 'Failed');
			}
		}
	}

	// If this is update form, get user details and update form
	getmeetingDetails(id: number) {
		this.meetingDetail = this.meetingService.getMeetingDetails(id).meetingData;
	}

	//set data on phone country change
	onCountryChange(event) {
		this.meetingDetail.phone.country = event.iso2;
		this.meetingDetail.phone.dialCode = `+${event.dialCode}`;
	}

}