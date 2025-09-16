import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "../ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import type { House } from "@prisma/client"

interface HouseFormDialogProps {
  house?: House
  onSubmit: (data: Partial<House>) => Promise<void>
  trigger: React.ReactNode
}

export function HouseFormDialog({ house, onSubmit, trigger }: HouseFormDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const data = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      color: formData.get("color") as string,
      score: parseInt(formData.get("score") as string) || 0,
    }

    try {
      await onSubmit(data)
      setIsOpen(false)
    } catch (error) {
      console.error("Failed to save house:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {house ? "Edit House" : "Create House"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              defaultValue={house?.name}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              defaultValue={house?.description}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="color">Color</Label>
            <select
              id="color"
              name="color"
              defaultValue={house?.color}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              required
            >
              <option value="">Select a color</option>
              <option value="red-600">Red</option>
              <option value="blue-600">Blue</option>
              <option value="green-600">Green</option>
              <option value="yellow-600">Yellow</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="score">Score</Label>
            <Input
              id="score"
              name="score"
              type="number"
              defaultValue={house?.score || 0}
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}