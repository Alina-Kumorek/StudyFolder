class Customer{
    constructor(name: string) {
      this.name=name;
    }

    getData() {
      return `${this.name}`;
    }

    getAddress() {
      return ``;
    }
  }
  
  class Suplier extends Customer{
    constructor(name: string, acc_nr, faktury) {
      super(name);
      this.acc_nr = acc_nr;
      this.faktury = faktury;
    }
  }