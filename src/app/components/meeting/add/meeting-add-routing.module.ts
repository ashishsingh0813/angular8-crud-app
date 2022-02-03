import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingAddComponent } from "./meeting-add.component";

const routes: Routes = [{ path: '', component: MeetingAddComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MeetingAddRoutingModule { }
