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

  public iconName = '';
  public className = '';
  public dialogRef;
  public fontSize;

  constructor(private dashboardService: IconService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dashboardService.resultI$.subscribe(
      (data) => {
        this.dialogRef.close();
        this.fontSize = data.size;
        if (data.icon.includes('icofont')) {
          this.iconName = '';
          this.className = data.icon;
        } else {
          this.iconName = data.icon;
          this.className = 'material-icons';
        }
      });
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(IconPickComponent, {
      width: '700px', height: '400px'
    });
  }

}
