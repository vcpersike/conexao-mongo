export type BudgetConstructorProps = {
  budget_id?: string;
  name: string;
  amount: number;
  currency: string;
  createdAt?: Date;
  updatedAt?: Date;
  description?: string | null;
  is_active?: boolean;
};

export type BudgetCreateCommand = {
  name: string;
  amount: number;
  currency: string;
  description?: string | null;
};

export class Budget {
  public budget_id: string;
  public name: string;
  public amount: number;
  public currency: string;
  public createdAt: Date;
  public updatedAt: Date;
  public description: string | null;
  public is_active: boolean;

  constructor(props: BudgetConstructorProps) {
    this.budget_id = props.budget_id;
    this.name = props.name;
    this.amount = props.amount;
    this.currency = props.currency;
    this.createdAt = props.createdAt ?? new Date();
    this.updatedAt = props.updatedAt ?? new Date();
    this.description = props.description ?? null;
    this.is_active = props.is_active ?? true;
  }

  public static create(props: BudgetCreateCommand): Budget {
    return new Budget(props);
  }

  changeName(name: string) {
    this.name = name;
  }

  changeAmount(amount: number) {
    this.amount = amount;
  }

  changeCurrency(currency: string) {
    this.currency = currency;
  }

  changeDescription(description: string | null) {
    this.description = description;
  }

  deactivate() {
    this.is_active = false;
  }

  activate() {
    this.is_active = true;
  }

  toJSON() {
    return {
      budget_id: this.budget_id,
      name: this.name,
      amount: this.amount,
      currency: this.currency,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      description: this.description,
      is_active: this.is_active,
    };
  }
}
