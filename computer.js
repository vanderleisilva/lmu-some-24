class Computer {
  constructor(ram, cpu, brand) {
    this.ram = ram;
    this.cpu = cpu;
    this.bran = brand;
  }

  getRam() {
    return this.ram;
  }

  showSpecs() {
    console.log(this.ram, this.cpu, this.brand);
  }
}

const myComputer = new Computer(16, "i5", "Dell");

myComputer.showSpecs();
