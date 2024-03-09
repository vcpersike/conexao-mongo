import { ValueObject } from '../value-object';

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super();
  }
}

class NumberValueObject extends ValueObject {
  constructor(readonly value: number) {
    super();
  }
}

class BooleanValueObject extends ValueObject {
  constructor(readonly value: boolean) {
    super();
  }
}

class DateValueObject extends ValueObject {
  constructor(readonly value: Date) {
    super();
  }
}

class ArrayValueObject extends ValueObject {
  constructor(readonly value: string[]) {
    super();
  }
}

class ComplexValueObject extends ValueObject {
  constructor(readonly value: { name: string; age: number }) {
    super();
  }
}

describe('ValueObject', () => {
  test('equals', () => {
    const stringValueObject1 = new StringValueObject('value');
    const stringValueObject2 = new StringValueObject('value');
    const stringValueObject3 = new StringValueObject('value2');
    const numberValueObject = new NumberValueObject(1);
    const booleanValueObject = new BooleanValueObject(true);
    const dateValueObject = new DateValueObject(new Date());
    const arrayValueObject = new ArrayValueObject(['value']);
    const complexValueObject = new ComplexValueObject({ name: 'name', age: 1 });

    expect(stringValueObject1.equals(stringValueObject2)).toBeTruthy();
    expect(stringValueObject1.equals(stringValueObject3)).toBeFalsy();
    expect(numberValueObject.equals(new NumberValueObject(1))).toBeTruthy();
    expect(booleanValueObject.equals(booleanValueObject)).toBeTruthy();
    expect(dateValueObject.equals(dateValueObject)).toBeTruthy();
    expect(arrayValueObject.equals(arrayValueObject)).toBeTruthy();
    expect(complexValueObject.equals(complexValueObject)).toBeTruthy();
  });
});
