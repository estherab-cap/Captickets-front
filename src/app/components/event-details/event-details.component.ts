import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { enableDebugTools } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit {
  event: any = "";

  constructor(
    public dialogRefDetails: MatDialogRef<EventDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      event: Event
    },
    private router: Router, 
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.eventService.getEventById(this.data.event.id).subscribe({
      next: (response) => { 
        this.event = response;
      },
      error: (err) => {
      }
    });
  }

  close() {
    this.dialogRefDetails.close();
  }
}
