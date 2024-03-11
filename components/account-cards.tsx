import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { getAccounts } from "@/lib/accounts";
import { Account } from "@/types";

export function AccountCards() {
  const initAccounts = [] as Account[];
  const [accounts, setAccounts] = useState(initAccounts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      const loadAccountsData = async () => {
        setLoading(true);

        const accountsData = await getAccounts();

        setAccounts(accountsData);
        setLoading(false);
      };
      loadAccountsData();
    };
  }, []);

  if (!loading)
    return (
      <>
        {accounts.length > 0 &&
          accounts.map((account, index) => (
            //   console.log(account.nickname, index)
            <Card className="w-[300px]" key={index}>
              <CardHeader>
                <CardDescription>{account.type}</CardDescription>
                <CardTitle>
                  {account.balance} {account.currency}
                </CardTitle>
              </CardHeader>
              <CardContent>{account.nickname}</CardContent>
            </Card>
          ))}
      </>
    );
  // {
  //     accounts.length > 0 ? (
  //         {accounts.map((account, index) =>(
  // <Card>
  //   <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
  //     <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       strokeWidth="2"
  //       className="h-4 w-4 text-muted-foreground"
  //     >
  //       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  //       <circle cx="9" cy="7" r="4" />
  //       <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  //     </svg>
  //   </CardHeader>
  //   <CardContent>
  //     <div className="text-2xl font-bold">+2350</div>
  //     <p className="text-xs text-muted-foreground">
  //       +180.1% from last month
  //     </p>
  //   </CardContent>
  // </Card>

  //         )
  //         )
  //     }
  //     )
  // }
}
