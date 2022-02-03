import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { routerTransition } from '../../../services/config/config.service';
import { MeetingService } from '../../../services/meeting/meeting.service';


@Component({
	selector: 'app-meeting-list',
	templateUrl: './meeting-list.component.html',
	styleUrls: ['./meeting-list.component.css'],
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})

export class MeetingListComponent implements OnInit {
	meetingListData = [];
	pageNumber = 1;
	pageSize = environment.pageSize;

	constructor(private meetingService: MeetingService) { }
	// Call meeting list function on page load
	ngOnInit() {
		this.getMeetingList();
	}

	// Get meeting list from services
	getMeetingList() {
		const meetingListData = this.meetingService.getAllMeetings();
		this.success(meetingListData);
	}

	// Get meeting list success
	success(data) {
		this.meetingListData = data.data;
		for (let i = 0; i < this.meetingListData.length; i++) {
			this.meetingListData[i].filterHelper = this.meetingListData[i].firstName + ' ' + this.meetingListData[i].lastName + ' ' + this.meetingListData[i].email + ' ' + this.meetingListData[i].phone.number;
		}
	}

	// Function to filter list data
	searchData(event) {
		this.pageNumber = 1;
		this.getMeetingList();
		this.meetingListData = this.meetingListData.filter(o => o.filterHelper.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1);
	}
}
