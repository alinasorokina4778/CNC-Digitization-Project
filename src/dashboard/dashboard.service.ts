import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getMetrics: any;
    getMachineById: any;
  getMachines() {
    return [{ id: 1, name: 'Станок 1', status: 'Работает' }];
  }

  getErrors() {
    return { errors: 5 };
  }

  getEfficiency() {
    return { efficiency: 92 }; // Например, 92% эффективности
  }
}
