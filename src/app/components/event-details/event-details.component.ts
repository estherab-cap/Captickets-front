import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Event } from '../../models/event.model';
import { EventService } from '../../services/event.service';
import { CommonModule } from '@angular/common';
import { enableDebugTools } from '@angular/platform-browser';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit {
  event: any = {};
  
  constructor(
    private router: Router, 
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.eventService.getEventById(Number(id)).subscribe((event: any) => {
          if (event) {
            this.event = event;
          } 
          
          else {
            this.router.navigate(['/events']);
          }
        });
      }
    });
  }
}
