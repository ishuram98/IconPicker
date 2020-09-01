import { Component, OnInit } from '@angular/core';
import { IconService } from './../icon.service';
import { MatDialog } from '@angular/material/dialog';
import { IconPickComponent } from '../icon-pick/icon-pick.component';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.css']
})
export class InitialPageComponent implements OnInit {

  public iconName;
  public className;
  public dialogRef;

  constructor(private dashboardService: IconService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dashboardService.resultI$.subscribe(
      (icon) => {
        this.dialogRef.close();
        if (icon.search('icofont') === -1) {
          console.log(this.iconName);
          this.iconName = icon;
          this.className = icon;
        } else {
          this.iconName = '';
          this.className = icon;
        }
      });
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(IconPickComponent, {
      width: '700px', height: '400px'
    });
  }

}
