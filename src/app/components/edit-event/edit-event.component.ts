import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../services/event.service';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Event } from '../../models/event.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-event.component.html',
  styleUrl: './edit-event.component.css'
})
export class EditEventComponent implements OnInit {
  @Input() eventToEdit: Event | null = null;
  @Output() formSubmit = new EventEmitter<void>();

  eventForm: FormGroup;
event: any;
  
  constructor(
    private fb: FormBuilder,
    public dialogRefEdit: MatDialogRef<EditEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      event: Event
    },

    private router: Router, 
    private eventService: EventService,
    private route: ActivatedRoute
  ) {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required],
      date: ['', Validators.required],
      min_price: ['', Validators.required],
      max_price: ['', Validators.required],
      place: ['', Validators.required],
      genre: ['', Validators.required],
      active: [true, Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.eventToEdit) {
      this.eventForm.patchValue(this.eventToEdit);
    }
  }

  close() {
    this.dialogRefEdit.close();
  }

  onSubmit(form:any): void { /*
    if (this.eventForm.valid) {
      const event: Event = {
        ...this.eventForm.value,
        id: this.eventToEdit ? this.eventToEdit.id : 0,
      };

      if (this.eventToEdit) {
        this.eventService.updateEvent(event).subscribe(() => {
          this.formSubmit.emit();
          this.eventForm.reset();
        });
      } else {
        this.eventService.addEvent(event).subscribe(() => {
          this.formSubmit.emit();
          this.eventForm.reset();
        });
      }
    }
    */
  }
    
}
