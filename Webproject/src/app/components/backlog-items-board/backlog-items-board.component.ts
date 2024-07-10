import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-backlog-items-board',
  templateUrl: './backlog-items-board.component.html',
  styleUrls: ['./backlog-items-board.component.scss']
})
export class BoardTemplateComponent {
  new = ['Item1', 'Item2', 'Item3'];

  approved = ['Item4', 'Item5', 'Item6'];

  comitted = ['Item7', 'Item8', 'Item9'];

  testing = ['ItemX', 'ItemXI', 'ItemXII'];

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
}
