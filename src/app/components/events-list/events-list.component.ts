import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { DeleteEventComponent } from "../delete-event/delete-event.component";

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [CommonModule, DeleteEventComponent],
  templateUrl: './events-list.component.html',
  styleUrl: './events-list.component.css'
})
export class EventsListComponent implements OnInit {
  events: Event[] = [];

  constructor(private router: Router, private eventService: EventService) {}
  
  ngOnInit(): void {
    this.eventService.getEvents().subscribe((data: any) => {
      this.events = data;
    })
  }

  goToDetails(id: any) {
    this.router.navigate(['/events', id]);
  }

  @ViewChild(DeleteEventComponent) confirmDeleteModal!: DeleteEventComponent;

  openDeleteModal(item: any): void {
    this.router.navigate(['/events/delete', item.id]);
  }

  confirmDelete(event: any) {
    const confirmDelete = confirm(`¿Estás seguro de que deseas eliminar el evento ${event.name}?`);
    if (confirmDelete) {
      this.eventService.deleteEvent(event.id).subscribe((event: any) => {
        location.reload();
      });
    }
  }
}
