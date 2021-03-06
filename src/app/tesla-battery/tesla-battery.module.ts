// Modules
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// Services
import { TeslaBatteryService } from "./tesla-battery.service";

// Containers
import { TeslaBatteryComponent } from "./containers/tesla-battery/tesla-battery.component";

// Components
import { TeslaCarComponent } from "./components/tesla-car/tesla-car.component";
import { TeslaStatsComponent } from "./components/tesla-stats/tesla-stats.component";
import { TeslaCounterComponent } from "./components/tesla-counter/tesla-counter.component";
import { TeslaClimateComponent } from "./components/tesla-climate/tesla-climate.component";
import { TeslaWheelsComponent } from "./components/tesla-wheels/tesla-wheels.component";

/**
 * Created by francesco on 26/12/2016.
 */

@NgModule({
  declarations: [
    //register containers component
    TeslaBatteryComponent,
    TeslaCarComponent,
    TeslaStatsComponent,
    TeslaCounterComponent,
    TeslaClimateComponent,
    TeslaWheelsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add services to the submodule
    TeslaBatteryService
  ],
  exports: [
    // export the component from the module so it can be used in other modules
    // that TeslaBatteryModule is imported into (such as the root module)
    TeslaBatteryComponent
  ]
})
export class TeslaBatteryModule {

}
