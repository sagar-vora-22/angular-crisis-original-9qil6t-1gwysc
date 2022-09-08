import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HeroListComponent } from "./hero-list/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

import { HeroesRoutingModule } from "./heroes-routing.module";
import { TableauModule } from "ngx-tableau";

@NgModule({
  imports: [CommonModule, FormsModule, HeroesRoutingModule, TableauModule],
  declarations: [HeroListComponent, HeroDetailComponent]
})
export class HeroesModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
