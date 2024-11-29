import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feature-board',
  templateUrl: './feature-board.component.html',
  styleUrls: ['./feature-board.component.scss']
})
export class FeatureBoardComponent {
  new = ['Item1', 'Item2', 'Item3'];

  inProgress = ['Item7', 'Item8', 'Item9'];

  testReady = ['ItemX', 'ItemXI', 'ItemXII'];

  done = ['ItemXIII', 'ItemXIV', 'ItemXV'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  /*constructor(http:HttpClient){
    http.get('https://localhost/');
  }*/
  
}
