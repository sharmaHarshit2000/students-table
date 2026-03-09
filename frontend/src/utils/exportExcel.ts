import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import type { Student } from "../types";

export const exportExcel = (data: Student[]) => {
  const formattedData = data.map((student, index) => ({
    "S.No.": index + 1,
    "Full Name": student.name,
    "Email Address": student.email,
    "Age": student.age,
  }));

  const worksheet = XLSX.utils.json_to_sheet(formattedData);

  // Set column widths so text isn't cut off
  worksheet["!cols"] = [
    { wch: 8 },  // S.No.
    { wch: 25 }, // Full Name
    { wch: 35 }, // Email Address
    { wch: 10 }, // Age
  ];

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

  const buffer = XLSX.write(workbook, {
    type: "array",
    bookType: "xlsx"
  });

  const file = new Blob([buffer], {
    type: "application/octet-stream"
  });

  const timestamp = new Date().toISOString().split("T")[0];
  saveAs(file, `Students_Report_${timestamp}.xlsx`);
};
