import { Component, Input } from '@angular/core';


@Component({
  selector: 'b-modal',
  templateUrl: './normal-modal.component.html',
  styleUrls: ['./normal-modal.component.css']
})
export class NormalModalComponent {
	modalStatus:number = 0;
  @Input() modalId:string = ""
  @Input() modalTitle:string = ""
  @Input() modalWidth:string = ""
  @Input() modalHeight:string = ""
}
