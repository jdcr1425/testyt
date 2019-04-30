import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NewService} from './services/new.service';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DomseguroPipePipe } from './pipes/domseguro-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DomseguroPipePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
