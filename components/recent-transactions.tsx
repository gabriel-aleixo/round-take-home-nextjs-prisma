import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getTransactions } from "@/lib/transactions";
import { Transaction } from "@/types";
import { useEffect, useState } from "react";

export function RecentTransactions() {
  const [transactions, setTransactions] = useState([] as Transaction[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      const loadTransactionsData = async () => {
        setLoading(true);

        const transactionsData = await getTransactions();

        setTransactions(transactionsData);
        setLoading(false);
        // console.log(transactions)
      };
      loadTransactionsData();
    };
  }, []);

  if (!loading)
    return (
      <>
        {transactions.length > 0 && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {new Date(transaction.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{transaction.status}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell className="text-right">
                    {transaction.amount} {transaction.currency}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </>
    );
}
