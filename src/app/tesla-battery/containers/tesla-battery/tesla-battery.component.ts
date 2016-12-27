/**
 * Created by francesco on 26/12/2016.
 */
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'tesla-battery',
  template: `
    <form class="tesla-battery" [formGroup]="tesla">
      <h1>{{ title }}</h1>
      <tesla-car [wheelsize]="tesla.get('config.wheels').value"></tesla-car>
      <div class="tesla-battery__notice">
        <p>
          The actual amount of range that you experience will vary based 
          on your particular use conditions. See how particular use conditions 
          may affect your range in our simulation model.
        </p>
        <p>
          Vehicle range may vary depending on the vehicle configuration, 
          battery age and condition, driving style and operating, environmental 
          and climate conditions.
        </p>
      </div>
    </form>
  `,
  styleUrls: ['./tesla-battery.component.scss']
})
export class TeslaBatteryComponent implements OnInit {
  title: string = 'Range per charge';
  tesla: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.tesla = this.fb.group({
      config: this.fb.group({
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      })
    });
    console.log(this.tesla.get('config.wheels').value);
  }
}
