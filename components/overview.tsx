"use client";

import { getCashFlow } from "@/lib/cash-flow";
import { useState, useEffect } from "react";
import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Overview() {
  const [chartData, setChartData] = useState([] as Month[]);
  const [loading, setLoading] = useState(false);

  interface Month {
    month: number;
    total: number;
  }

  useEffect(() => {
    return () => {
      const loadCharData = async () => {
        setLoading(true);
        const cashFlow = await getCashFlow();
        setChartData(cashFlow);
        setLoading(false);
      };
      loadCharData();
    };
  }, []);

  if (!loading)
    return (
      <>
        {chartData.length > 0 && (
          <ResponsiveContainer
          width="100%" height={350}
          >
            <BarChart data={chartData}>
              <XAxis
                dataKey="month"
                stroke="#000"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#000"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value}`}
              />
              <Bar dataKey="total" fill="#696969" radius={[4, 4, 0, 0]} />
              <LabelList dataKey="total" position="top" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </>
    );
}
