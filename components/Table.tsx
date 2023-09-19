"use client"

import React from 'react';
import { createColumnHelper, getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table';
import { Slabs_Insert_Input } from '@/lib/gql/types'
import { Table as NextTable, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, group } from "@nextui-org/react";

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
  console.log("table data:", props.data)
  const table = useReactTable({
    data: props.data,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <NextTable>
      <TableHeader>
        {table.getHeaderGroups().map(headerGroup => (
          <TableHeader key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <TableColumn key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </TableColumn>
            ))}
          </TableHeader>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map(row => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </NextTable>
  );
};

export default Table;
