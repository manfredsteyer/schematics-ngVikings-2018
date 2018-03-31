import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { SideMenuComponent } from './side-menu/side-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TestComponent, Test2Component, SideMenuComponent],
  exports: [SideMenuComponent]
})
export class CoreModule { }
