import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition } from '@angular/material/tooltip';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { UserData } from '../shared/interface/user-data';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, AfterViewInit {
  value: string = 'Search';
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
    'edit',
    'delete',
  ];

  dataSource = new MatTableDataSource<UserData>();
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users: UserData[]) => {
      this.dataSource.data = users;
    });
  }

  onDeleteUser(id: string): void {
    this.userService.deleteUser(id);
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  doFilter(event: KeyboardEvent) {
    console.log(event);
    const filterValue: string = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
