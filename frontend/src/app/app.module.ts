import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router} from '@angular/router';

import { ApiClientModule } from './api/client/api-client.module';
import { AppComponent } from './app.component';
import { PipeFilterPipe } from './pipe-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PipeFilterPipe,
  ],
  imports: [
	FormsModule,
    BrowserModule,
    ApiClientModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
