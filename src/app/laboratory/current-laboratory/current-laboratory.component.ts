import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StopLaboratoryComponent } from './stop-laboratory.component';
import { LaboratoryService } from '../laboratory.service';

@Component({
  selector: 'app-current-laboratory',
  templateUrl: './current-laboratory.component.html',
  styleUrls: ['./current-laboratory.component.css']
})
export class CurrentLaboratoryComponent implements OnInit {
  progress = 0;
  timer: number;

  constructor(private dialog: MatDialog, private laboratoryService: LaboratoryService) { }

  ngOnInit() {
    this.startOrResumeTimer();
  }

  startOrResumeTimer() {
    const step = this.laboratoryService.getRunningExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress = this.progress + 1;
      if (this.progress >= 100) {
        this.laboratoryService.completeExercise();
        clearInterval(this.timer);
      }
    }, step);
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopLaboratoryComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.laboratoryService.cancelExcercise(this.progress);
      } else {
        this.startOrResumeTimer();
      }
    });
  }

}
