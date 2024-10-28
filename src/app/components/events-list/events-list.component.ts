import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { DeleteEventComponent } from "../delete-event/delete-event.component";
import { MatDialog } from '@angular/material/dialog';
import { EventDetailsComponent } from '../event-details/event-details.component';
import { FormsModule } from '@angular/forms';
import { AddEventComponent } from '../add-event/add-event.component';
import { EditEventComponent } from '../edit-event/edit-event.component';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, DeleteEventComponent, FormsModule],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})

export class EventsListComponent implements OnInit {

  events: Event[] = [];
  filteredEvents: Event[] = [];
  searchTerm: string = '';

  constructor(private router: Router, private eventService: EventService, private dialog: MatDialog) {}
  
  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: any) => {
      this.events = data;
      this.filteredEvents = this.events;
    })
  }

  onSearchChange() {
    this.filteredEvents = this.events.filter(event =>
      event.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openDeleteModal(id: number): void {
    const dialogRef = this.dialog.open(DeleteEventComponent, {
      data: { id }, 
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/events'])
      }
    });
  }

  openAddModal() {
    const dialogRefAdd = this.dialog.open(AddEventComponent, {});

    dialogRefAdd.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/events'])
      }
    });
  }

  openDetailsModal(event: Event): void {
    const dialogRefDetails = this.dialog.open(EventDetailsComponent, {
      data: { event }, 
    });

    dialogRefDetails.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/events'])
      }
    });
  }

  openEditModal(event: Event): void {
    const dialogRefEdit = this.dialog.open(EditEventComponent, {
      data: { event }, 
    });

    dialogRefEdit.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/events'])
      }
    });
  }
}
