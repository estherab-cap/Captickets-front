import { Routes } from '@angular/router';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { DeleteEventComponent } from './components/delete-event/delete-event.component';

export const routes: Routes = [
    {path: '', redirectTo: 'events', pathMatch: 'full'},
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent},
    {path: 'events/delete/:id', component: DeleteEventComponent}
];
