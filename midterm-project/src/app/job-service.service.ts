import { Injectable } from '@angular/core';
import { Job } from './models/job'
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  JobList: Job[] = [{
    id: 1,
    title: "Banker",
    description: "I was banking all day long",
    duration: "2 years",
    employer: "ABC BANKING"
  },{
    id:2,
    title: "Money maker",
    description: "I was making money",
    duration:"1 Century",
    employer:"Cool company"
  },
  {
    id:3,
    title: "Money maker",
    description: "I was making money",
    duration:"1 Century",
    employer:"Cool company"
  },{
    id: 4,
    title: "Investment Banker",
    description: "Help clients raise money by issuing and selling securities.",
    duration: "Full-time",
    employer: "Cool company"
  },{
    id: 5,
    title: "Financial Analyst",
    description: "Analyze financial data and provide insights to help businesses make better decisions.",
    duration: "Contract",
    employer: "Cool company"
  },{
    id: 6,
    title: "Sales Representative",
    description: "Sell products or services to customers and generate revenue for the company.",
    duration: "Full-time",
    employer: "Cool company"
  },{
    id: 7,
    title: "Marketing Manager",
    description: "Develop and implement marketing strategies to promote the company's products or services.",
    duration: "Full-time",
    employer: "Cool company"
  },{
    id: 8,
    title: "Business Development Manager",
    description: "Identify and pursue new business opportunities to help grow the company.",
    duration: "Full-time",
    employer: "Cool company"
  },{
    id: 9,
    title: "Fund Manager",
    description: "Manage investment portfolios and make investment decisions on behalf of clients to generate profits.",
    duration: "Full-time",
    employer: "Cool company"
  }
];

  title: string = "title"
  constructor() { }

  getJobList(): Observable<Job[]> {
    return of(this.JobList)
  }

  getJobById(id: number): Observable <Job | undefined>{
    return of(this.JobList.find(p => p.id == id))
  }

}
