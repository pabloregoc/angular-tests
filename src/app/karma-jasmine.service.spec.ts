import { TestBed } from '@angular/core/testing';
import { KarmaJasmineService } from './karma-jasmine.service';

describe('KarmaJasmineService', () => {
  let service: KarmaJasmineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(KarmaJasmineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debería sumar dos números correctamente', () => {
    const resultado = service.sumar(2, 3);
    expect(resultado).toBe(5);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.sumar(-5, -3);
    expect(resultado).toBe(-8);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.sumar(10, -5);
    expect(resultado).toBe(5);
  });
  it('debería multiplicar dos numeros positivos correctamente', () => {
    const resultado = service.multiplicar(2, 3);
    expect(resultado).toBe(6);
  });
  it('debería multiplicar dos numeros negativos correctamente', () => {
    const resultado = service.multiplicar(-2, -3);
    expect(resultado).toBe(6);
  });
  it('debería multiplicar un mumero positivo u otro negativo correctamente', () => {
    const resultado = service.multiplicar(2, -3);
    expect(resultado).toBe(-6);
  });
  it('debería restar dos números correctamente', () => {
    const resultado = service.restar(3, 2);
    expect(resultado).toBe(1);
  });

  it('debería sumar números negativos correctamente', () => {
    const resultado = service.restar(-5, -3);
    expect(resultado).toBe(-2);
  });

  it('debería sumar un número positivo y un número negativo correctamente', () => {
    const resultado = service.restar(10, (-5));
    expect(resultado).toBe(15);
  });
  it('debería dividir dos números correctamente', () => {
    const resultado = service.dividir(6, 2);
    expect(resultado).toBe(3);
  });

  it('debería dividir números negativos correctamente', () => {
    const resultado = service.dividir(-10, -2);
    expect(resultado).toBe(5);
  });

  it('debería dividir un número positivo y un número negativo correctamente', () => {
    const resultado = service.dividir(10, (-5));
    expect(resultado).toBe(-2);
  });
});
