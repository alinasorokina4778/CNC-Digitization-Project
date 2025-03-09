import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('machines')
  getMachines() {
    return this.dashboardService.getMachines();
  }

  @Get('errors')
  getErrors() {
    return this.dashboardService.getErrors();
  }

  @Get('efficiency')
  getEfficiency() {
    return this.dashboardService.getEfficiency();
  }
}
