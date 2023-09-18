"use client"

import React from 'react';
import { createColumnHelper, getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table';
import { Slabs_Insert_Input } from '@/lib/gql/types'

const row: Slabs_Insert_Input = {
  certification_number: "2815581007",
  title: "Bone",
  issue: "1",
  issue_date: "1/96",
  issue_year: "1996",
  publisher: "Image Comics",
  grade: "9.6",
  page_quality: "WHITE",
  grade_date: "06/29/2023",
  grade_category: "Signature",
  art_comments: "Jeff Smith cover",
  key_comments: "Reprints Bone #1 from Cartoon Books.",
  grader_notes: "indent center of front cover",
  signatures: "SIGNED & SKETCH BY JEFF SMITH ON 6/16/23"
}


const columnHelper = createColumnHelper<Slabs_Insert_Input>();
const defaultColumns = [
  columnHelper.accessor("title", {
    header: "Title",
  }),
  columnHelper.accessor("certification_number", {
    header: "Certification Number",
  }),
  columnHelper.accessor("issue", {
    header: "Issue",
  }),
  columnHelper.accessor("issue_date", {
    header: "Issue Date",
  }),
  columnHelper.accessor("issue_year", {
    header: "Issue Year",
  }),
  columnHelper.accessor("publisher", {
    header: "Publisher",
  }),
  columnHelper.accessor("grade", {
    header: "Grade",
  }),
  columnHelper.accessor("page_quality", {
    header: "Page Quality",
  }),
  columnHelper.accessor("grade_date", {
    header: "Grade Date",
  }),
  columnHelper.accessor("grade_category", {
    header: "Grade Category",
  }),
  columnHelper.accessor("art_comments", {
    header: "Art Comments",
  }),
  columnHelper.accessor("key_comments", {
    header: "Key Comments",
  }),
  columnHelper.accessor("grader_notes", {
    header: "Grader Notes",
  }),
  columnHelper.accessor("signatures", {
    header: "Signatures",
  }),
  // columnHelper.accessor("purchase_price", {}),
  // columnHelper.accessor("purchase_platform", {}),
  // columnHelper.accessor("personal_note", {}),
  // columnHelper.accessor("asking_price", {}),
  // columnHelper.accessor("purchase_date", {}),
];



const Table = (props: { data: any[] }) => {
  const table = useReactTable({
    data: props.data,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map(footerGroup => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.footer,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
};

export default Table;
