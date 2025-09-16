'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"
import type { Event, House } from "@prisma/client"

interface EventsTableProps {
  events: (Event & { house: House })[]
  onEdit?: (event: Event & { house: House }) => void
  onDelete?: (event: Event & { house: House }) => void
}

export function EventsTable({ events, onEdit, onDelete }: EventsTableProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Venue</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>House</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell className="font-medium">{event.title}</TableCell>
              <TableCell>{event.description}</TableCell>
              <TableCell>{formatDate(event.date)}</TableCell>
              <TableCell>{event.venue}</TableCell>
              <TableCell>{event.category}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full bg-${event.house.color}`} />
                  {event.house.name}
                </div>
              </TableCell>
              <TableCell className="text-right space-x-2">
                <Button 
                  size="icon" 
                  variant="ghost"
                  onClick={() => onEdit?.(event)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="text-red-500 hover:text-red-600"
                  onClick={() => onDelete?.(event)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}