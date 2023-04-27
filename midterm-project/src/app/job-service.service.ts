import { Injectable } from '@angular/core';
import { Job } from './models/job';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  listOfContacts: Job[] = [{
    name: "Bob",
    email: "bob@bob.com",
    phone: "123-123-1234"
},
{
    name: "Mark",
    email: "mark@mark.com",
    phone: "456-123-1234"
},
{
    name: "Eric",
    email: "eric@eric.com",
    phone: "789-123-1234"
},
{
    name: "Ben",
    email: "ben@ben.com",
    phone: "123-123-4567"
}];
  constructor() { }
}
