import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LaboratoryService } from '../laboratory.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-laboratory',
  templateUrl: './new-laboratory.component.html',
  styleUrls: ['./new-laboratory.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];

  constructor(private laboratoryService: LaboratoryService) { }

  ngOnInit() {
    this.exercises = this.laboratoryService.getAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    this.laboratoryService.startExercise(form.value.exercise);
  }

}
