export class Meeting {
    firstName: string;
    lastName: string;
    phone: Phone = new Phone();
    address: string;
    meetingTime: string;
    email: string;
}

class Phone {
    dialCode: string = '+1';
    country: string = "us";
    number: string
}