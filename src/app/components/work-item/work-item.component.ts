import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'ptf-work-item',
    standalone: true,
    templateUrl: './work-item.component.html',
    styleUrls: ['./work-item.component.scss'],
    imports: [CardComponent, CommonModule]
})
export class WorkItemComponent {

  @Input() item: any;

  toggleMore = true;

}
