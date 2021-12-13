import { HasPrint } from './myInterfaceForClass'
export class Invoice implements HasPrint {
  constructor(
    readonly client: string,
    private work: string,
    public amount: number,
  ){}

  print() {
    return `Invoice client=${this.client}, work=${this.work}, amount=${this.amount}`
  }
}

export class Payment implements HasPrint {
  constructor(
    readonly recipiented: string,
    private job: string,
    public amount: number,
  ){}

  print() {
    return `Payment recipiented=${this.recipiented}, job=${this.job}, amount=${this.amount}`
  }
}