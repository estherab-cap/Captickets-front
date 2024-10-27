import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-delete-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-event.component.html',
  styleUrl: './delete-event.component.css'
})

export class DeleteEventComponent {
  isVisible = true;

  @Output() deleteConfirmed = new EventEmitter<void>();
  constructor(private router: Router, 
              private eventService: EventService, 
              private route: ActivatedRoute) {}

  open(): void {
    this.isVisible = true;
  }

  onClose(): void {
    this.isVisible = false;
  }

  confirmDelete(): void {
    this.route.paramMap.subscribe((params) => {
      const id : any = params.get('id');
      this.deleteConfirmed.emit();
      this.onClose();
      this.eventService.deleteEvent(id);

      this.router.navigate(['/events']);
    });
  } 
}

