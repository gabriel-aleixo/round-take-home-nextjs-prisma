
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./ui/card";
import { getAccounts } from "@/lib/accounts";
import { useState, useEffect } from "react";

export function TotalBalanceCard() {
  const [accountsBalance, setAccountsBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      const loadAccountsData = async () => {
        setLoading(true);

        const accountsData = await getAccounts();

        const totalBalance = accountsData.reduce((sum, account) => {
          return sum + account.balance;
        }, 0);

        setAccountsBalance(totalBalance);
        setLoading(false);
      };
      loadAccountsData();
    };
  }, []);

  if (!loading)
    return (
      <Card className="w-[300px]">
        <CardHeader>
            <CardDescription>
                Total Account Balance
            </CardDescription>
          <CardTitle>
            {accountsBalance} GBP
          </CardTitle>
        </CardHeader>
      </Card>
    );
}
