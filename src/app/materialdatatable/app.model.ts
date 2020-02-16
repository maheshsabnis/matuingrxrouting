export class SuppliersData {
    constructor(
      public  SupplierId: number,
      public  CompanyName: string,
      public  ContactName : string,
      public  ContactTitle : string,
      public  Address : string,
      public  City : string,
      public  Region : string,
      public  PostalCode: number,
      public  Country : string,
      public  Phone : string,
      public  Fax : string,
      public  HomePage : string
    ){}
}

export class OrderDetailsData {
  constructor(
    public  OrderId: number,
    public  CustomerName : string,
    public  EmployeeName : string,
    public  OrderDate: Date,
    public   RequiredDate: Date,
    public  ShippedDate: Date,
    public  ShipperName : string,
    public  Freight: number,
    public  ShipName : string,
    public  ShipAddress : string,
    public  ShipCity : string,
    public  ShipPostalCode : string,
    public  ShipCountry : string
  ){}
}
