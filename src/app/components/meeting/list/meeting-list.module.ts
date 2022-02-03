import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MeetingService } from 'src/app/services/meeting/meeting.service';
import { MeetingListComponent } from './meeting-list.component';
import { MeetingListRoutingModule } from './meeting-list.routing.module';



@NgModule({
    declarations: [
        MeetingListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MeetingListRoutingModule,
        NgxPaginationModule
    ],
    providers: [MeetingService]
})
export class MeetingListModule { }
