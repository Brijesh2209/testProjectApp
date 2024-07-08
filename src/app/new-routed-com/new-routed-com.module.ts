import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewRoutedComComponent} from "./new-routed-com.component";
import {RouterModule, Routes} from "@angular/router";

const ROUTES: Routes = [{ path: '', component: NewRoutedComComponent }];

@NgModule({
  declarations: [NewRoutedComComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class NewRoutedComModule { }
