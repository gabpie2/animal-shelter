import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainPageModule } from './features/main-page/main-page.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
