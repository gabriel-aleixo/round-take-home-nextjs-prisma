"use client"

import { Overview } from "@/components/overview";
import { AccountCards } from "@/components/account-cards";
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
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Account Balance
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-left space-x-2 align-middle">
              <Select>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="GBP" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">GBP</SelectItem>
                  <SelectItem value="dark">EUR</SelectItem>
                  <SelectItem value="system">USD</SelectItem>
                </SelectContent>
              </Select>
              <div className="text-2xl font-bold self-center">$45,231.89</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <AccountCards></AccountCards>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Overview />
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}
