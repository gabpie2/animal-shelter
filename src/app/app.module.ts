import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainPageModule } from './features/main-page/main-page.module';
 
//import Pipe i w deklaracji, teraz jest w DogModule

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
