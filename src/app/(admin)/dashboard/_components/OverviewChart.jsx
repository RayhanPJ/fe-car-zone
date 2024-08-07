"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", new: 23, second: 11 },
  { month: "February", new: 32, second: 43 },
  { month: "March", new: 66, second: 33 },
  { month: "April", new: 23, second: 65 },
  { month: "May", new: 43, second: 21 },
  { month: "June", new: 44, second: 33 },
  { month: "July", new: 54, second: 40 },
]

const chartConfig = {
  new: {
    label: "New",
    color: "hsl(var(--primary))",
  },
  second: {
    label: "Second",
    color: "hsl(var(--success))",
  },
}

export default function OverviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cars sold this year</CardTitle>
        <CardDescription>
          Showing total cars sold for every month in 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="second"
              type="natural"
              fill="var(--color-second)"
              fillOpacity={0.4}
              stroke="var(--color-second)"
              stackId="a"
            />
            <Area
              dataKey="new"
              type="natural"
              fill="var(--color-new)"
              fillOpacity={0.4}
              stroke="var(--color-new)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - July 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
