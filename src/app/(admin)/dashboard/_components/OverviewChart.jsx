"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import useSWR from "swr"
import { fetcher } from "@/api"

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
import { Spinner } from "@nextui-org/react"

const chartData = [
  { date: "1", new: 23, second: 11 },
  { date: "2", new: 32, second: 43 },
  { date: "3", new: 66, second: 33 },
  { date: "4", new: 23, second: 65 },
  { date: "5", new: 43, second: 21 },
  { date: "6", new: 44, second: 33 },
  { date: "7", new: 54, second: 40 },
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

  const { data, isLoading, isValidating } = useSWR("/api/cms/cars/sales-data", fetcher, { refreshInterval: 10000 }) 

  // console.log(data)
  if(isLoading) return <Spinner />
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Cars sold this week</CardTitle>
        <CardDescription>
          Showing total cars sold for every days in last week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-full">
          <AreaChart
            accessibilityLayer
            data={data?.weekly}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
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
    </Card>
  )
}
