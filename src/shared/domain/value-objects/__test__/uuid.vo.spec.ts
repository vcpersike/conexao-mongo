import { InvalidUuidError, Uuid } from '../uuid.vo';
import { validate as uuidValidate } from 'uuid';

describe('Uuid Unit Tests', () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');
  test('should thorw error when uuid is invalid', () => {
    expect(() => new Uuid('invalid-uuid')).toThrowError(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test('should create a valid uuid', () => {
    const uuid = new Uuid();
    expect(uuid).toBeInstanceOf(Uuid);
    expect(uuid.id).toBeDefined();
    expect(uuidValidate(uuid.id)).toBeTruthy();
    expect(uuidValidate(uuid.id)).toBe(true);
    expect(validateSpy).toHaveBeenCalled();
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test('should create a valid uuid with a given value', () => {
    const uuid = new Uuid('f4f7e3b5-6b0d-4f0f-9f1d-3e1c9e3d7bb4');
    expect(uuid).toBeInstanceOf(Uuid);
  });
});
