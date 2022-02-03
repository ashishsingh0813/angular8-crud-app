import { Injectable } from '@angular/core';

@Injectable()
export class MeetingService {

  constructor() { }

  // Get all meetings list from local storage
  getAllMeetings() {
    let meetingList: any;
    if (localStorage.getItem('meetings') && localStorage.getItem('meetings') !== '') {
      meetingList = {
        code: 200,
        message: 'Meetings List Fetched Successfully',
        data: JSON.parse(localStorage.getItem('meetings'))
      };
    } else {
      meetingList = {
        code: 200,
        message: 'Meetings List Fetched Successfully',
        data: JSON.parse(localStorage.getItem('meetings'))
      };
    }
    return meetingList;
  }

  //save meeting to local database
  doRegisterMeeting(data, id) {
    const meetingList = JSON.parse(localStorage.getItem('meetings'));
    let returnData;
    if (id != null) {
      if (meetingList.filter(o => o.email == data.email && o.id != id).length) {
        returnData = {
          code: 409,
          message: 'Email Address Already In Use',
          data: null
        };
        return returnData;
      }

      let index = meetingList.findIndex(o => o.id == data.id)
      index >= 0 && meetingList.splice(index, 1, data);
      localStorage.setItem('meetings', JSON.stringify(meetingList));
      returnData = {
        code: 200,
        message: 'Meeting Successfully Updated',
        data: JSON.parse(localStorage.getItem('meetings'))
      };
    } else {
      data.id = this.generateRandomID();
      for (let i = 0; i < meetingList.length; i++) {
        if (meetingList[i].email === data.email) {
          returnData = {
            code: 409,
            message: 'Email Address Already In Use',
            data: null
          };
          return returnData;
        }
      }
      meetingList.unshift(data);

      localStorage.setItem('meetings', JSON.stringify(meetingList));

      returnData = {
        code: 200,
        message: 'Meeting Successfully Added',
        data: JSON.parse(localStorage.getItem('meetings'))
      };
    }
    return returnData;
  }



  //return meeting using id
  getMeetingDetails(id: number) {
    const meetingList = JSON.parse(localStorage.getItem('meetings'));

    const returnData = {
      code: 200,
      message: 'Meeting Details Fetched',
      meetingData: meetingList.find(o => o.id == id)
    };

    return returnData;
  }


  //used to generate a random number
  generateRandomID() {
    const x = Math.floor((Math.random() * Math.random() * 9999));
    return x;
  }

}
