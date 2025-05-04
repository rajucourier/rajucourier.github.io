import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ShippingRatesTable() {
    const TableCellComponent = ({ children,isShow=true}: { children: React.ReactNode,isShow?:any }) => (
        <TableCell>
            {isShow ? (
                <span> &#8377;{children}</span>
            ) : (
                <span>{children}</span>
            )}

           
        </TableCell>
    );
  return (
    <div className="w-full space-y-6">
      {/* Desktop view with horizontal scrolling */}
      <div className="hidden md:block">
        <div className="rounded-md border">
          <div className="w-full overflow-auto">
            <Table>
              {/* <TableCaption>Shipping rates by weight and provider</TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead rowSpan={2} className="w-[80px] align-bottom border-r">
                    Weight (kg)
                  </TableHead>
                  <TableHead colSpan={3} className="text-center border-b bg-slate-50">
                    USA
                  </TableHead>
                  <TableHead colSpan={1} className="text-center border-b bg-slate-50">
                    Canada
                  </TableHead>
                  <TableHead colSpan={1} className="text-center border-b bg-slate-50">
                    UK
                  </TableHead>
                  <TableHead colSpan={1} className="text-center border-b bg-slate-50">
                    AUS
                  </TableHead>
                </TableRow>
                <TableRow>
                  {/* USA Providers */}
                  <TableHead className="bg-slate-50/50">FedEx (4-6)days</TableHead>
                  <TableHead className="bg-slate-50/50">DHL (3-5)days</TableHead>
                  <TableHead className="bg-slate-50/50 border-r">UPS (4-6)days</TableHead>

                  {/* Canada Providers */}
                  <TableHead className="bg-slate-50/50 border-r">FedEx (4-6)days</TableHead>
                  {/* <TableHead className="bg-slate-50/50">DHL</TableHead>
                  <TableHead className="bg-slate-50/50 border-r">UPS</TableHead> */}

                  {/* UK Providers */}
                  {/* <TableHead className="bg-slate-50/50">Express</TableHead> */}
                  <TableHead className="bg-slate-50/50 border-r">Slow (4-7)days</TableHead>
                      
                    {/* AUS Providers */}
                    {/* <TableHead className="bg-slate-50/50">Express</TableHead> */}
                    <TableHead className="bg-slate-50/50">Slow (7-10)days</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="font-medium">8-10</TableCell>
                  {/* USA Rates */}
                  <TableCellComponent>800</TableCellComponent>
                  <TableCellComponent>950</TableCellComponent>
                  <TableCellComponent>800</TableCellComponent>
                  {/* Canada Rates */}
                  <TableCellComponent>900</TableCellComponent>
                  {/* UK Rates */}
                  <TableCellComponent>600</TableCellComponent>
                  {/* <TableCellComponent>-</TableCellComponent> */}
                  {/* AUS Rates */}
                  <TableCellComponent>700</TableCellComponent>
                  {/* <TableCellComponent>-</TableCellComponent> */}
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="font-medium">11-20</TableCell>
                 {/* USA Rates */}
                 <TableCellComponent>720</TableCellComponent>
                  <TableCellComponent>830</TableCellComponent>
                  <TableCellComponent>720</TableCellComponent>
                  {/* Canada Rates */}
                  <TableCellComponent>770</TableCellComponent>
                  {/* <TableCellComponent>-</TableCellComponent>
                  <TableCellComponent>-</TableCellComponent> */}
                  {/* UK Rates */}
                  <TableCellComponent>550</TableCellComponent>
                  {/* <TableCellComponent>-</TableCellComponent> */}
                  {/* AUS Rates */}
                  <TableCellComponent>620</TableCellComponent>
                  {/* <TableCellComponent>-</TableCellComponent> */}
                </TableRow>
                <TableRow className="border-b border-gray-200">
                  <TableCell className="font-medium">21-30</TableCell>
                  {/* USA Rates */}
                  <TableCellComponent>700</TableCellComponent>
                  <TableCellComponent>790</TableCellComponent>
                  <TableCellComponent>700</TableCellComponent>
                  {/* Canada Rates */}
                  <TableCellComponent>730</TableCellComponent>
                  {/* <TableCellComponent>-</TableCellComponent>
                  <TableCellComponent>-</TableCellComponent> */}
                  {/* UK Rates */}
                  <TableCellComponent>510</TableCellComponent>
                  {/* <TableCellComponent>-</TableCellComponent> */}
                  {/* AUS Rates */}
                  <TableCellComponent>600</TableCellComponent>
                  {/* <TableCellComponent>-</TableCellComponent> */}
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">31+</TableCell>
                  {/* USA Rates */}
                  <TableCellComponent>690</TableCellComponent>
                  <TableCellComponent>760</TableCellComponent>
                  <TableCellComponent>680</TableCellComponent>
                  {/* Canada Rates */}
                  <TableCellComponent>720</TableCellComponent>
                  {/* <TableCellComponent>-</TableCellComponent>
                  <TableCellComponent>-</TableCellComponent> */}
                  {/* UK Rates */}
                  <TableCellComponent isShow={false}>N/A</TableCellComponent>
                  {/* <TableCellComponent>-</TableCellComponent> */}
                  {/* AUS Rates */}
                  <TableCellComponent isShow={false}>N/A</TableCellComponent>
                  {/* <TableCellComponent>-</TableCellComponent> */}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Mobile view with tabs and cards */}
      <div className="md:hidden">
        <Tabs defaultValue="usa">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="usa">USA</TabsTrigger>
            <TabsTrigger value="canada">Canada</TabsTrigger>
            <TabsTrigger value="uk">UK</TabsTrigger>
            <TabsTrigger value="aus">AUS</TabsTrigger>
          </TabsList>

          {/* USA Tab Content */}
          <TabsContent value="usa" className="space-y-4">
            {[
              { weight: "8-10 kgs", fedex: "800", dhl: "950", ups: "800" },
              { weight: "11-20 kgs", fedex: "720", dhl: "830", ups: "720" },
              { weight: "21-30 kgs", fedex: "700", dhl: "790", ups: "700" },
              { weight: "31+ kgs", fedex: "690", dhl: "760", ups: "680" },
            ].map((item) => (
              <Card key={item.weight}>
                <CardHeader className="pb-2">
                  <CardTitle>{item.weight}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="font-medium">FedEx</div>
                    <div className="font-medium">DHL</div>
                    <div className="font-medium">UPS</div>
                    <div> &#8377;{item.fedex}</div>
                    <div> &#8377;{item.dhl}</div>
                    <div> &#8377;{item.ups}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Canada Tab Content */}
          <TabsContent value="canada" className="space-y-4">
            {[
              { weight: "8-10 kg", canadaPost: "900",  },
              { weight: "11-20 kg", canadaPost: "770", },
              { weight: "21-30 kg", canadaPost: "730", },
              { weight: "31+ kg", canadaPost: "720",  },
            ].map((item) => (
              <Card key={item.weight}>
                <CardHeader className="pb-2">
                  <CardTitle>{item.weight}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="font-medium">FedEx</div>
                    <div>&#8377;{item.canadaPost}</div>
                  
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* UK Tab Content */}
          <TabsContent value="uk" className="space-y-4">
            {[
              { weight: "8-10 kg", royalMail: "600",  },
              { weight: "11-20 kg", royalMail: "550",  },
              { weight: "21-30 kg", royalMail: "510", },
            ].map((item) => (
              <Card key={item.weight}>
                <CardHeader className="pb-2">
                  <CardTitle>{item.weight}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="font-medium">Slow</div>
                    <div>&#8377;{item.royalMail}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          {/* UK Tab Content */}
          <TabsContent value="aus" className="space-y-4">
            {[
              { weight: "8-10 kg", royalMail: "700",  },
              { weight: "11-20 kg", royalMail: "620",  },
              { weight: "21-30 kg", royalMail: "600", },
            ].map((item) => (
              <Card key={item.weight}>
                <CardHeader className="pb-2">
                  <CardTitle>{item.weight}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="font-medium">Slow</div>
                    <div>&#8377;{item.royalMail}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
