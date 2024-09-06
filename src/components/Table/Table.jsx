import * as React from "react";
import './Table.scss'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";

//  Booking history
// I'm using material UI virtualized table and data
// https://mui.com/material-ui/react-table/#virtualized-table

const bookingData = [
  {
    id: 1,
    carModel: "Toyota Camry",
    repairType: "Engine Repair",
    bookingDate: "2024-08-25",
    bookingAmount: 50000,
    discount: 8,
    cashback: 0,
  },
  {
    id: 2,
    carModel: "Honda Civic",
    repairType: "Transmission Repair",
    bookingDate: "2024-08-26",
    bookingAmount: 60000,
    discount: 10,
    cashback: 0,
  },
  {
    id: 3,
    carModel: "Ford F-150",
    repairType: "Brake Replacement",
    bookingDate: "2024-08-27",
    bookingAmount: 32000,
    discount: 0,
    cashback: 10,
  },
  {
    id: 4,
    carModel: "BMW X5",
    repairType: "Oil Change",
    bookingDate: "2024-08-28",
    bookingAmount: 150000,
    discount: 15,
    cashback: 0,
  },
  {
    id: 5,
    carModel: "Tesla Model S",
    repairType: "Battery Replacement",
    bookingDate: "2024-08-29",
    bookingAmount: 1200000,
    discount: 0,
    cashback: 25,
  },
  {
    id: 6,
    carModel: "Hyundai Elantra",
    repairType: "Tire Rotation",
    bookingDate: "2024-09-01",
    bookingAmount: 20000,
    discount: 8,
    cashback: 0,
  },
  {
    id: 7,
    carModel: "Chevrolet Malibu",
    repairType: "Suspension Check",
    bookingDate: "2024-09-02",
    bookingAmount: 35000,
    discount: 30,
    cashback: 0,
  },
  {
    id: 8,
    carModel: "Audi A4",
    repairType: "AC Repair",
    bookingDate: "2024-09-03",
    bookingAmount: 86500,
    discount: 0,
    cashback: 10,
  },
  {
    id: 9,
    carModel: "Jeep Wrangler",
    repairType: "Windshield Replacement",
    bookingDate: "2024-09-04",
    bookingAmount: 120000,
    discount: 35,
    cashback: 2,
  },
  {
    id: 10,
    carModel: "Volkswagen Passat",
    repairType: "Exhaust Repair",
    bookingDate: "2024-09-05",
    bookingAmount: 55000,
    discount: 0,
    cashback: 0,
  },
];


const columns = [
  {
    width: 180,
    label: "Car Model",
    dataKey: "carModel",
  },
  {
    width: 180,
    label: "Repair Type",
    dataKey: "repairType",
  },
  {
    width: 140,
    label: "Booking Date",
    dataKey: "bookingDate",
  },
  {
    width: 100,
    label: "Amount",
    dataKey: "bookingAmount",
    numeric: true,
  },
  {
    width: 120,
    label: "Discount(%)",
    dataKey: "discount",
    numeric: true,
  },
  {
    width: 150,
    label: "Cashback (%)",
    dataKey: "cashback",
    numeric: true,
  },
];

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{
            width: column.width,
            fontWeight: "bold",
            backgroundColor: "#f5f5f5",
          }} 
          sx={{ backgroundColor: "background.paper" }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  return (
    <div className="Table">
      <h3 style={{ marginBottom: "20px", fontWeight: "bold" , color : "#fff"}}>
        Recent Car Repair Bookings
      </h3>
      <Paper style={{ height: 400, width: "100%" }}>
        <TableVirtuoso
          data={bookingData}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </Paper>
    </div>
  );
}
