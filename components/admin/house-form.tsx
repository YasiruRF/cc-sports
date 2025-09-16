import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { House } from "@prisma/client"

interface HouseFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  house?: House
  onSubmit: (data: Partial<House>) => Promise<void>
}

export function HouseForm({ open, onOpenChange, house, onSubmit }: HouseFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const colors = ["Phoenix", "Shark", "Bear", "Falcon"]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        color: formData.get("color") as string,
        score: parseInt(formData.get("score") as string) || 0,
      }

      await onSubmit(data)
      onOpenChange(false)
    } catch (error) {
      console.error("Failed to save house:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {house ? "Edit House" : "Add House"}
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
              className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
              defaultValue={house?.color}
              required
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
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
              onClick={() => onOpenChange(false)}
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