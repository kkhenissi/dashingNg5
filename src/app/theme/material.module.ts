import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from '../app.component';


@NgModule({
    declarations: [
    ],
    imports: [
     MatCheckboxModule,
     MatCardModule,
    ],
    exports: [
        MatCheckboxModule,
        MatCardModule,
       ],
    providers: [],
    bootstrap: []
  })
  export class MaterialModule { }
