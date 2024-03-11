"use client"

import { Overview } from "@/components/overview";
import { AccountCards } from "@/components/account-cards";
import { TotalBalanceCard } from "@/components/total-balance-card";
import { RecentTransactions } from "@/components/recent-transactions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function page() {


  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Accounts</h2>
          <div className="hidden md:flex items-center space-x-2">
            <Button>Download</Button>
          </div>
        </div>
        <div className="flex flex-auto md:p8 pt6">
          <TotalBalanceCard></TotalBalanceCard>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <AccountCards></AccountCards>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-7">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
          <Card className="col-span-7">
            <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <RecentTransactions />
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
