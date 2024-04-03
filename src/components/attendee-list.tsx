// Datas
import 'dayjs/locale/pt-br'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
// Componentes
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'
import { ChangeEvent, useState } from 'react'

import { attendees } from '../data/attendees'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableCell } from './table/table-cell'
import { TableHeader } from './table/table-header'
import { TableRow } from './table/table-row'

dayjs.extend(relativeTime) // habilitando o plugin no dayjs
dayjs.locale('pt-br')

export function AttendeeList() {
  const [search, setSearch] = useState('')

  function onSearchInputChangedevent(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-200" />

          <input
            onChange={onSearchInputChangedevent}
            className="bg-transparent flex-1 outline-none p-0 border-0 text-sm"
            placeholder="Buscar participante..."
          />
        </div>

        {search}
      </div>

      <Table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10 text-primary-300 focus:outline-none focus:ring-primary-500"
              />
            </TableHeader>

            <TableHeader>Código</TableHeader>

            <TableHeader>Participante</TableHeader>

            <TableHeader>Data de inscrição</TableHeader>

            <TableHeader>Data do check-in</TableHeader>

            <TableHeader style={{ width: 64 }} />
          </tr>
        </thead>

        <tbody>
          {attendees.map((attendee) => {
            return (
              <TableRow
                className="border-b border-white/10 hover:bg-highlights-300/5"
                key={attendee.id}
              >
                <TableCell>
                  <input
                    type="checkbox"
                    className="size-4 bg-black/20 rounded border border-white/10 text-primary-300  focus:outline-none focus:ring-primary-500"
                  />
                </TableCell>

                <TableCell>{attendee.id}</TableCell>

                <TableCell>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-semibold text-white">
                      {attendee.name}
                    </span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>

                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>

                <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>

                <TableCell>
                  <IconButton
                    isTransparent={true}
                    className="bg-black/20 border border-white/10 rounded-md p-1.5"
                  >
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </tbody>

        <tfoot>
          <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>

          <TableCell className="text-right" colSpan={3}>
            <div className="inline-flex items-center gap-8">
              <span>Página 1 de 23</span>
              <div className="flex items-center gap-1.5">
                <IconButton>
                  <ChevronsLeft className="size-4" />
                </IconButton>

                <IconButton>
                  <ChevronLeft className="size-4" />
                </IconButton>

                <IconButton>
                  <ChevronRight className="size-4" />
                </IconButton>

                <IconButton>
                  <ChevronsRight className="size-4" />
                </IconButton>
              </div>
            </div>
          </TableCell>
        </tfoot>
      </Table>
    </div>
  )
}
