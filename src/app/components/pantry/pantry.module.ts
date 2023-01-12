import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DinnerPlanComponent } from '../dinner-plan/dinner-plan.component';
import { FunctionService } from 'src/app/services/functions';
import { VariableService } from 'src/app/services/variables';
@NgModule({
  imports: [CommonModule],
  declarations: [DinnerPlanComponent],
  exports: [DinnerPlanComponent],
})
export class PantryModule {}
