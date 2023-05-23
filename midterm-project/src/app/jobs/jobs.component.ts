import { Component,OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/job-service.service';
import { Job } from 'src/app/models/job'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  title = 'midterm-project';
  JobList: Job[] = [];

  constructor (private myJobService: JobServiceService ){}

  ngOnInit(): void{
    this.title = this.myJobService.title
    this.JobList = this.myJobService.JobList;
  }

}
