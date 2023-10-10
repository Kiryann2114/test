import {getParams} from "@/app/actions/getParams";

export default async function GraphPage() {

  const AllParams = await getParams()

  return (
      <div>
          {AllParams.finance.periods.map(period=>(
              <div>{period.graph.year.May}</div>
          ))}
      </div>
  )
}
