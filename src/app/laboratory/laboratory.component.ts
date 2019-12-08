import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { LaboratoryService } from './laboratory.service';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.css']
})
export class TrainingComponent implements OnInit {
  ongoingTraining = false;
  exerciseSubscription: Subscription;

  constructor(private laboratoryService: LaboratoryService) { }

  ngOnInit() {
    this.exerciseSubscription = this.laboratoryService.exerciseChanged.subscribe(exercise => {
      if (exercise) {
        this.ongoingTraining = true;
      } else {
        this.ongoingTraining = false;
      }
    });
  }

}
