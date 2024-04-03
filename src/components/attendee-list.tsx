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
import { ChangeEvent, useEffect, useState } from 'react'

import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableCell } from './table/table-cell'
import { TableHeader } from './table/table-header'
import { TableRow } from './table/table-row'

dayjs.extend(relativeTime) // habilitando o plugin no dayjs
dayjs.locale('pt-br')

interface AttendeeProps {
  id: string
  name: string
  email: string
  createdAt: string
  checkedInAt: string | null
}

export function AttendeeList() {
  const [search, setSearch] = useState('')
  const [attendees, setAttendees] = useState<AttendeeProps[]>([])

  // Funcionalidades de paginação
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(() => {
    // Inicializando o estado com o valor do query parameter (se houver)
    const url = new URL(window.location.toString())

    if (url.searchParams.has('page')) {
      return Number(url.searchParams.get('page'))
    }

    return 1
  })

  const totalPages = Math.ceil(total / 10)

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString())

    // adicionando a página ao searchParams (tudo precisa ser string)
    url.searchParams.set('page', String(page))

    // pushState -> não faz um redirect, apenas altera o endereço, sem fazer um recarregamento da página
    window.history.pushState({}, '', url)

    setPage(page)
  }

  function goToNextPage() {
    setCurrentPage(page + 1)
  }

  function goToPreviousPage() {
    setCurrentPage(page - 1)
  }

  function goToFirstPage() {
    setCurrentPage(1)
  }

  function goToLastPage() {
    setCurrentPage(totalPages)
  }

  function onSearchInputChangedevent(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)

    // setPage(1)
  }

  useEffect(() => {
    const url = new URL(
      'http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees',
    )

    url.searchParams.set('pageIndex', String(page - 1)) // de acordo com a paginação

    if (search.length > 0) {
      url.searchParams.set('query', search) // dado da barra de busca
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAttendees(data.attendees)

        setTotal(data.total)
      })
  }, [page, search])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
          <Search className="size-4 text-emerald-200" />

          <input
            onChange={onSearchInputChangedevent}
            className="bg-transparent flex-1 outline-none p-0 border-0 text-sm focus:ring-0"
            placeholder="Buscar participante..."
          />
        </div>
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

                <TableCell>
                  {attendee.checkedInAt === null ? (
                    <span className="text-zinc-700">
                      Não realizou o check-in
                    </span>
                  ) : (
                    dayjs().to(attendee.checkedInAt)
                  )}
                </TableCell>

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
          <TableCell colSpan={3}>
            Mostrando {attendees.length} de {total} itens
          </TableCell>

          <TableCell className="text-right" colSpan={3}>
            <div className="inline-flex items-center gap-8">
              <span>
                Página {page} de {totalPages}
              </span>
              <div className="flex items-center gap-1.5">
                <IconButton onClick={goToFirstPage} disabled={page === 1}>
                  <ChevronsLeft className="size-4" />
                </IconButton>

                <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                  <ChevronLeft className="size-4" />
                </IconButton>

                <IconButton
                  onClick={goToNextPage}
                  disabled={page === totalPages}
                >
                  <ChevronRight className="size-4" />
                </IconButton>

                <IconButton
                  onClick={goToLastPage}
                  disabled={page === totalPages}
                >
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
