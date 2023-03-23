import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newContact: Contact = {
    name: "Bob",
    email: "bob@bob.com",
    phone: "123-123-1234"
  };

  title: string = "My Contacts";

  constructor() { }

  ngOnInit(): void {
 console.log(this.newContact);
  }

}
