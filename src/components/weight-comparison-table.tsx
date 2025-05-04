import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function WeightComparisonTable() {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableCaption>Weight measurements across different countries</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Weight (kg)</TableHead>
            <TableHead>USA (lbs)</TableHead>
            <TableHead>Canada (lbs)</TableHead>
            <TableHead>UK (stone/lbs)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">8 kg</TableCell>
            <TableCell>17.64 lbs</TableCell>
            <TableCell>17.64 lbs</TableCell>
            <TableCell>1 st 3.64 lbs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">11 kg</TableCell>
            <TableCell>24.25 lbs</TableCell>
            <TableCell>24.25 lbs</TableCell>
            <TableCell>1 st 10.25 lbs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">20 kg</TableCell>
            <TableCell>44.09 lbs</TableCell>
            <TableCell>44.09 lbs</TableCell>
            <TableCell>3 st 2.09 lbs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">39 kg</TableCell>
            <TableCell>85.98 lbs</TableCell>
            <TableCell>85.98 lbs</TableCell>
            <TableCell>6 st 1.98 lbs</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
