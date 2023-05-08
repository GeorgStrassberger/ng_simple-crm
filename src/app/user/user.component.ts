import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition } from '@angular/material/tooltip';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { UserData } from '../shared/interface/user-data';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements AfterViewInit {
  positionOptions: TooltipPosition[] = [
    'after',
    'before',
    'above',
    'below',
    'left',
    'right',
  ];
  position = new FormControl(this.positionOptions[2]);
  ELEMENT_DATA: UserData[] = [
    {
      firstname: 'Klaus',
      lastname: 'Kleber',
      email: 'klaus@kleber.de',
      birthDate: 823215600000,
      street: 'Waldweg 4',
      id: 'asdf1sa2d3f21',
      zipCode: 65478,
      city: 'Altstadt',
    },
    {
      firstname: 'Hans',
      lastname: 'Peter',
      email: 'hans@peter.de',
      birthDate: 584229600000,
      street: 'Parkstrasse 58',
      id: 's5d4f6as4df8',
      zipCode: 83650,
      city: 'Kirchdorf',
    },
    {
      firstname: 'Anna',
      lastname: 'Maier',
      email: 'anna@maier.com',
      birthDate: 565429600000,
      street: 'Schlossallee 8',
      id: 's5d4f6as4df234',
      zipCode: 45950,
      city: 'Hausham',
    },
  ];
  displayedColumns: string[] = [
    'no',
    'firstname',
    'lastname',
    'email',
    'birthdate',
    'zipCode',
    'city',
    'street',
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
