import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition } from '@angular/material/tooltip';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { UserData } from '../shared/interface/user-data';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, AfterViewInit {
  positionOptions: TooltipPosition[] = [
    'after',
    'before',
    'above',
    'below',
    'left',
    'right',
  ];
  position = new FormControl(this.positionOptions[2]);

  displayedColumns: string[] = [
    'no',
    'firstname',
    'lastname',
    'email',
    'birthdate',
    'zipCode',
    'city',
    'street',
    'delete',
  ];

  dataSource = new MatTableDataSource<UserData>();
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: UserData[]) => {
      this.dataSource.data = users;
    });
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
