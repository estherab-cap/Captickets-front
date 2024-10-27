import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class EventService {
  constructor(private http: HttpClient) {}

  private eventsUrl = 'http://localhost:8083/events';

  public getEvents() {

    return this.http.get<Event[]>(this.eventsUrl);
  }

  public getEventById(id: number) {

    return this.http.get(this.eventsUrl + '/' + id);
  }

  public deleteEvent(id: number) {
    const url = this.eventsUrl + "/delete/" + id;
    console.log('delete event')
    console.log(url);
    return this.http.delete(this.eventsUrl + '/delete/' + id);
  }
}
