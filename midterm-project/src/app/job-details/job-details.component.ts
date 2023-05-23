import { Component, Input,OnInit } from '@angular/core';
import { JobServiceService } from 'src/app/job-service.service';

import { Job } from '../models/job';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent {
  job?: Job;
  constructor(private myJobService: JobServiceService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
    const id = this.activatedRoute.snapshot.params['jobId'];
    this.myJobService.getJobById(id).subscribe(result => {
       this.job = result;
    })
  }
}
