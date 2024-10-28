import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  constructor(
    public dialogRefAdd: MatDialogRef<AddEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      event: Event
    },
    private router: Router, 
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  close() {
    this.dialogRefAdd.close();
  }
}
