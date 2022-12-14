import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { CrisisCenterHomeComponent } from "./crisis-center-home/crisis-center-home.component";
import { CrisisListComponent } from "./crisis-list/crisis-list.component";
import { CrisisCenterComponent } from "./crisis-center/crisis-center.component";
import { CrisisDetailComponent } from "./crisis-detail/crisis-detail.component";

import { CrisisCenterRoutingModule } from "./crisis-center-routing.module";

import { TableauModule } from "ngx-tableau";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule,
    TableauModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ]
})
export class CrisisCenterModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
