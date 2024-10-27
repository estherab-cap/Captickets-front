export class Event {
    id: number;
    name: string;
    description: string;
    city: string;
    date: Date;
    minPrice: number;
    maxPrice: number;
    place: string;
    genre: string;
    active: boolean;

    constructor() {
        this.id = 0;
        this.name = '';
        this.description = '';
        this.city = '';
        this.date = new Date();
        this.minPrice = 0.0;
        this.maxPrice = 0.0;
        this.place = '';
        this.genre = '';
        this.active = true;
    }
}

