import { Budget } from '../budget.entity';

describe('Budget Unit Tests', () => {
  test('construtor', () => {
    const budget = new Budget({
      name: 'Budget 1',
      amount: 0,
      currency: 'USD',
    });
    expect(budget.budget_id).toBeUndefined();
    expect(budget.name).toBe('Budget 1');
    expect(budget.amount).toBe(0);
    expect(budget.currency).toBe('USD');
    expect(budget.createdAt).toBeInstanceOf(Date);
    expect(budget.updatedAt).toBeInstanceOf(Date);
    expect(budget.description).toBeNull();
    expect(budget.is_active).toBeTruthy();
  });

  test('changeAmount', () => {
    const budget = new Budget({
      name: 'Budget 1',
      amount: 0,
      currency: 'USD',
    });
    budget.changeAmount(100);
    expect(budget.amount).toBe(100);
  });

  test('changeCurrency', () => {
    const budget = new Budget({
      name: 'Budget 1',
      amount: 0,
      currency: 'USD',
    });
    budget.changeCurrency('BRL');
    expect(budget.currency).toBe('BRL');
  });

  test('changeDescription', () => {
    const budget = new Budget({
      name: 'Budget 1',
      amount: 0,
      currency: 'USD',
    });
    budget.changeDescription('Description');
    expect(budget.description).toBe('Description');
  });
});

test('deactivate', () => {
  const budget = new Budget({
    name: 'Budget 1',
    amount: 0,
    currency: 'USD',
  });
  budget.deactivate();
  expect(budget.is_active).toBeFalsy();
});

test('activate', () => {
  const budget = new Budget({
    name: 'Budget 1',
    amount: 0,
    currency: 'USD',
  });
  budget.deactivate();
  budget.activate();
  expect(budget.is_active).toBeTruthy();
});

test('toJSON', () => {
  const budget = new Budget({
    name: 'Budget 1',
    currency: 'USD',
    amount: 0,
  });
  const json = budget.toJSON();
  expect(json.budget_id).toBeUndefined();
  expect(json.name).toBe('Budget 1');
  expect(json.amount).toBe(0);
  expect(json.currency).toBe('USD');
  expect(json.createdAt).toBeInstanceOf(Date);
  expect(json.updatedAt).toBeInstanceOf(Date);
  expect(json.description).toBeNull();
  expect(json.is_active).toBeTruthy();
});

test('toJSON with budget_id', () => {
  const budget = new Budget({
    budget_id: '1',
    name: 'Budget 1',
    amount: 0,
    currency: 'USD',
  });
  const json = budget.toJSON();
  expect(json.budget_id).toBe('1');
  expect(json.name).toBe('Budget 1');
  expect(json.amount).toBe(0);
  expect(json.currency).toBe('USD');
  expect(json.createdAt).toBeInstanceOf(Date);
  expect(json.updatedAt).toBeInstanceOf(Date);
  expect(json.description).toBeNull();
  expect(json.is_active).toBeTruthy();
});
describe('Create command', () => {
  test('Include Complet', () => {
    const budgetComplet = Budget.create({
      name: 'Budget 2',
      amount: 100,
      currency: 'BRL',
      description: 'Description',
    });
    expect(budgetComplet.name).toBe('Budget 2');
    expect(budgetComplet.amount).toBe(100);
    expect(budgetComplet.currency).toBe('BRL');
    expect(budgetComplet.createdAt).toBeInstanceOf(Date);
    expect(budgetComplet.updatedAt).toBeInstanceOf(Date);
    expect(budgetComplet.description).toBe('Description');
  });
});
