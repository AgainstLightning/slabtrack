"use client"

import React from 'react';
import { Slabs_Insert_Input } from '@/lib/gql/types'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  createColumnHelper
} from "@tanstack/react-table";

import {
  Table as ShadTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
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
  // columnHelper.accessor("art_comments", {
  //   header: "Art Comments",
  // }),
  // columnHelper.accessor("key_comments", {
  //   header: "Key Comments",
  // }),
  // columnHelper.accessor("grader_notes", {
  //   header: "Grader Notes",
  // }),
  columnHelper.accessor("signatures", {
    header: "Signatures",
  }),
  // columnHelper.accessor("purchase_price", {}),
  // columnHelper.accessor("purchase_platform", {}),
  // columnHelper.accessor("personal_note", {}),
  // columnHelper.accessor("asking_price", {}),
  // columnHelper.accessor("purchase_date", {}),
];

interface TableProps {
  data: any[]
}

const Table: React.FC<TableProps> = ({ data = [] }) => {

  const table = useReactTable({
    data,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <ShadTable>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={table.getAllColumns().length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </ShadTable>
    </div >
  )
};

export default Table;
