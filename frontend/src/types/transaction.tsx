export interface Transaction {
  id: number;
  date: Date;
  type: string;
  subtype: TransactionType;
  amount: number;
  notes: string;
}

export type TransactionType = "INCOME" | "EXPENSE";
