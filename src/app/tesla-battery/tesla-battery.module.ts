import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TeslaBatteryService } from "./tesla-battery.service";
/**
 * Created by francesco on 26/12/2016.
 */

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    TeslaBatteryService
  ]
})
export class TeslaBatteryModule {}
