interface Printer {
  name: string;
  print(this: ThisType<Printer>, message: string): void
}

const inkjetPrinter: Printer = {
  name: 'Inkjet Printer',
  print(this: Printer, message: string) {
    console.log(`[${this.name}] Pringting: ${message}`)
  }
}

inkjetPrinter.print('Document 1')