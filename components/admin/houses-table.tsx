import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"
import type { House } from "@prisma/client"

interface HousesTableProps {
  houses: House[]
  onEdit?: (house: House) => void
  onDelete?: (house: House) => void
}

export function HousesTable({ houses, onEdit, onDelete }: HousesTableProps) {
  const getHouseColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      'red-600': 'bg-red-600',
      'blue-600': 'bg-blue-600',
      'green-600': 'bg-green-600',
      'yellow-600': 'bg-yellow-600'
    }
    return colorMap[color] || 'bg-gray-600'
  }
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Score</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {houses.map((house) => (
            <TableRow key={house.id}>
              <TableCell className="font-medium">{house.name}</TableCell>
              <TableCell>{house.description}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div 
                    className={`w-4 h-4 rounded-full ${getHouseColorClass(house.color)}`}
                  />
                  {house.color.replace('-600', '')}
                </div>
              </TableCell>
              <TableCell>{house.score}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button 
                  size="icon" 
                  variant="ghost"
                  onClick={() => onEdit?.(house)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="text-red-500 hover:text-red-600"
                  onClick={() => onDelete?.(house)}
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