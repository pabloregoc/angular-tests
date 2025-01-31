import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KarmaJasmineService {

  constructor() { }

  sumar(a: number, b: number): number {
    return a + b;
  }
  multiplicar(a: number, b: number): number {
    return a * b;
  }
  restar(a: number, b: number): number {
    return a - b;
  }
  dividir(a: number, b: number): number {
    return a / b;
  }
  mediaArray(array: number[]): number {
    let sumatoria: number = 0;
    for (let i = 0; i < array.length; i++) {
      sumatoria += array[i];
    }
    return sumatoria / array.length;  
  }

}
