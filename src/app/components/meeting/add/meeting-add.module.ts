import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { MeetingService } from 'src/app/services/meeting/meeting.service';
import { MeetingAddRoutingModule } from './meeting-add-routing.module';
import { MeetingAddComponent } from './meeting-add.component';



@NgModule({
    declarations: [
        MeetingAddComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MeetingAddRoutingModule,
        Ng2TelInputModule,
        GooglePlaceModule
    ],
    providers: [MeetingService]
})
export class MeetingAddModule { }
