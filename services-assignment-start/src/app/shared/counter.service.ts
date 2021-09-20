export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log(`Inactive to Active: ${this.activeToInactive}`);
  }
  incrementInactiveToActive() { 
    this.inactiveToActive++; 
    console.log(`Inactive to Active: ${this.inactiveToActive}`);
  }
}