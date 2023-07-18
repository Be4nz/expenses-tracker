export interface Transaction {
  id: number;
  title: string;
  date: Date;
  tag: string;
  type: TransactionType;
  amount: number;
  notes: string;
}

export type TransactionType = "INCOME" | "EXPENSE";
