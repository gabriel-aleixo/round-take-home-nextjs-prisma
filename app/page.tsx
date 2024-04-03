import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finances Dashboard",
  description: "Proof of Concept - Gabriel Aleixo",
};

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">
          <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
              <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Home</h2>
              </div>
            </div>
          </ScrollArea>
        </main>
      </div>
    </>
  );
}
