/**
 * Created by francesco on 27/12/2016.
 */


import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Stats } from "../../models/stats.interface";

@Component({
  selector: 'tesla-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tesla-stats">
      <ul>
        <li *ngFor="let stat of stats">
          <div class="tesla-stats-icon tesla-stats-icon--{{ stat.model | lowercase }}"></div>
          <p>{{ stat.miles }}</p>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./tesla-stats.component.scss']
})
export class TeslaStatsComponent {
  @Input() stats: Stats[];
}
