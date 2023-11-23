import React from "react";
import xlsx from 'xlsx-js-style'
// import "./tablecomp.css";

import products from "./products.json";
import { Table } from "react-bootstrap";
const handleDownload = async () => {
    // const table = document.getElementById('mytable')
    
  //   const wb = xlsx.utils.book_new();

  //   // STEP 2: Create data rows and styles
  //   let row =[]
  // products.map((pro) => {
  //   let res = { v: `${pro.name}`,  s: { fill: { fgColor: { rgb: "FF0000" } } } }
  //     row.push(res)


  //     // Object.keys(pro).map((k) => {
  //     //   let res = { v: `${k}`, s: { fill: { fgColor: { rgb: "FF0000" } } } }
  //     //   row.push(res)
  //     // })
  //     // Object.values(pro).map((v) => {
  //     //   let res = { v: `${v}`, s: { fill: { fgColor: { rgb: "4287f5" } } } }
  //     //   row.push(res)
  //     // })

        
  //   })
  //   console.log(row)
  //   // let row = [
  //   //     { v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
  //   //     { v: "bold & color", t: "s", s: { font: { bold: true, color: { rgb: "FF0000" } } } },
  //   //     { v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "FF0000" } } } },
  //   //     { v: "line\nbreak", t: "s", s: { alignment: { wrapText: true } } },
  //   // ];
   
  //   // STEP 3: Create worksheet with rows; Add worksheet to workbook
  //   // console.log(row)
  //   const ws = xlsx.utils.aoa_to_sheet([row]);
  //   console.log(ws)

  //   xlsx.utils.book_append_sheet(wb, ws, "readme demo");
    
   
    // const wb = xlsx.utils.json_to_sheet(table);
    // console.log('wb',wb)

    // const ws = wb.Sheets[wb.SheetNames[0]]; // Accessing the first sheet
    // console.log('ws')
    // const range = xlsx.utils.decode_range(ws['!ref']);
    // console.log('range',range)

    // for (let R = range.s.r; R <= range.e.r; ++R) {
    //   for (let C = range.s.c; C <= range.e.c; ++C) {
    //     const cellAddress = xlsx.utils.encode_cell({ r: R, c: C });
    //     console.log('add',cellAddress)

    //     const cell = ws[cellAddress];
    //     console.log(cell)

    //     if (cellAddress.includes('1')) {
    //       cell.s = {
    //         font: {
    //           name: 'Arial',
    //           sz: 12,
    //           color: { rgb: '000000' },
    //           bold: true, 
    //         },
    //         fill: { fgColor: { rgb: "FF0000" } }
    //       };
    //     }
    //   }
    // }

    // xlsx.writeFile(wb, 'styled_excel_file_RAW1COL.xlsx');


    // const jsonData = [
    //   { Name: 'John', Age: 28, Country: 'USA' },
    //   { Name: 'Alice', Age: 24, Country: 'Canada' },
    //   // ... more data
    // ];
    
    // Create a new workbook
    const workbook = xlsx.utils.book_new();
    const sheetName = 'Sheet1';
    
    // Convert JSON data to a worksheet
    const worksheet = xlsx.utils.json_to_sheet(products);

    console.log(worksheet)
    
    // Set cell styles (example)
    Object.keys(worksheet).forEach((k) => {
      if(k.includes('1')  ){
        worksheet[k].s = {   fill: { fgColor: { rgb: "FF0000" } } };
      
      }
      if(k.includes('A')){
        worksheet[k].s = {   fill: { fgColor: { rgb: "4287f5" } } };
      }
    })
    // Applying bold font to cell A1
    
    // Add the worksheet to the workbook
    xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
    
    // Write the workbook to an XLSX file
    xlsx.writeFile(workbook, 'output.xlsx');
};

const TablesComp = () => {
  return (
    <div>
      {" "}
      <Table id="mytable" striped bordered hover>
        <thead>
          <tr>
            <th className="head-1">Id</th>
            <th className="head-2">Name</th>
            <th className="head-3">Model</th>
            <th className="head-4">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro) => (
            <tr key={pro.id}>
              <td>{pro.id}</td>
              <td>{pro.name}</td>
              <td>{pro.modeName}</td>
              <td>RS :{pro.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default TablesComp;




//   // const wb = XLSX.utils.book_new();
//   // const ws = XLSX.utils.table_to_sheet(table);

//   // const customColors = {
//   //   redColor: { patternType: "solid", fgColor: { rgb: "FF0000" } },
//   //   greenColor: { patternType: "solid", fgColor: { rgb: "00FF00" } },
//   //   blueColor: { patternType: "solid", fgColor: { rgb: "0000FF" } },
//   // };

//   // const cellColorMap = {
//   //   A1: "redColor",
//   //   B1: "greenColor",
//   //   C1: "blueColor",
//   // };

//   // // Apply custom colors to cells
//   // Object.keys(cellColorMap).forEach((cellAddress) => {
//   //   const colorKey = cellColorMap[cellAddress];
//   //   console.log("ck", colorKey);
//   //   console.log("ck", customColors[colorKey]);
//   //   ws[cellAddress].s = customColors[colorKey];
//   // });

//   // XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
//   // XLSX.writeFile(wb, "final.xlsx");

//   /* create a workbook */
//   const worksheet = XLSX.utils.table_to_sheet(table);

//   // Apply cell styles
//   XLSX.utils.sheet_add_aoa(worksheet, [["", ""]], { origin: "A1" }); // Placeholder to create cell objects
//   const range = { s: { c: 0, r: 0 }, e: { c: 1, r: 1 } }; // Define a range

//   for (let R = range.s.r; R <= range.e.r; ++R) {
//     for (let C = range.s.c; C <= range.e.c; ++C) {
//       const cellAddress = { c: C, r: R };
//       const cellRef = XLSX.utils.encode_cell(cellAddress);

//       // Modify individual cell style properties as needed
//       if (!worksheet[cellRef]) worksheet[cellRef] = {};
//       worksheet[cellRef].s = {
//         font: { color: { rgb: "#FF0000" } }, // Font color
//         border: { top: { style: "thin", color: { rgb: "#000000" } } }, // Top border
//       };
//     }
//   }

//   // Create a workbook and add the worksheet
//   const workbook = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

//   // Save the workbook as an Excel file
//   XLSX.writeFile(workbook, "exported_table2.xlsx", { cellStyles: true });