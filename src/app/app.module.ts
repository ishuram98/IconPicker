import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { IconPickComponent } from './modules/icon-pick/icon-pick.component';
import { InitialPageComponent } from './modules/initial-page/initial-page.component';

@NgModule({
  declarations: [
    AppComponent,
    IconPickComponent,
    InitialPageComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
  ],
  entryComponents: [IconPickComponent,
    InitialPageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
