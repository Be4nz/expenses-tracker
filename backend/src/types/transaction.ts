export interface Transaction {
  id: number;
  title: string;
  date: Date;
  tag: string;
  type: TransactionType;
  amount: number;
  notes: string;
  createdBy: number;
}

export type TransactionType = "INCOME" | "EXPENSE";
