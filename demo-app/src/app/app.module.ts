import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SideMenuService } from './core/side-menu/side-menu.service';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [SideMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
