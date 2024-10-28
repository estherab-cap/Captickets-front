import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-event.component.html',
  styleUrl: './delete-event.component.css'
})

export class DeleteEventComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      name: string; id: number 
    },
    private eventService: EventService,
    private router: Router
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete(): void {
    this.eventService.deleteEvent(this.data.id).subscribe({
      next: (response) => { 
        this.dialogRef.close();
        //window.location.href = window.location.href;
        window.location.reload();
      },
      error: (err) => {
        console.error("Error al eliminar el evento:", err);
      }
    });
  }
}

