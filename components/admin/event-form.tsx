'use client'

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Event, House } from "@prisma/client"
import { useEffect } from "react"
import { ControllerRenderProps } from "react-hook-form"

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  date: z.string().min(1, "Date is required"),
  venue: z.string().min(1, "Venue is required"),
  category: z.string().min(1, "Category is required"),
  houseId: z.coerce.number().min(1, "House is required"),
})

export type EventFormValues = z.infer<typeof formSchema>

interface EventFormProps {
  event?: Event & { house: House }
  houses: House[]
  open?: boolean
  onOpenChange?: (open: boolean) => void
  onSubmit?: (data: EventFormValues) => void
}

export function EventForm({ event, houses, open, onOpenChange, onSubmit }: EventFormProps) {
  const defaultValues = {
    title: "",
    description: "",
    date: "",
    venue: "",
    category: "",
    houseId: 0,
  }

  const form = useForm<EventFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  // Reset form when event changes
  useEffect(() => {
    if (event) {
      const date = event.date ? new Date(event.date) : new Date()
      // Adjust for timezone offset to get the correct local date
      date.setMinutes(date.getMinutes() - date.getTimezoneOffset())
      
      form.reset({
        title: event.title,
        description: event.description,
        date: date.toISOString().split('T')[0],
        venue: event.venue,
        category: event.category,
        houseId: event.houseId,
      })
    } else {
      form.reset(defaultValues)
    }
  }, [event, form])

  // Handle form submission
  const handleSubmit = async (data: EventFormValues) => {
    if (onSubmit) {
      await onSubmit(data)
      onOpenChange?.(false)
      form.reset()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{event ? "Edit Event" : "Create Event"}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }: { field: ControllerRenderProps<EventFormValues, 'title'> }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }: { field: ControllerRenderProps<EventFormValues, 'description'> }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }: { field: ControllerRenderProps<EventFormValues, 'date'> }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="venue"
              render={({ field }: { field: ControllerRenderProps<EventFormValues, 'venue'> }) => (
                <FormItem>
                  <FormLabel>Venue</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }: { field: ControllerRenderProps<EventFormValues, 'category'> }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Track">Track</SelectItem>
                        <SelectItem value="Field">Field</SelectItem>
                        <SelectItem value="Swimming">Swimming</SelectItem>
                        <SelectItem value="Team Sport">Team Sport</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="houseId"
              render={({ field }: { field: ControllerRenderProps<EventFormValues, 'houseId'> }) => (
                <FormItem>
                  <FormLabel>House</FormLabel>
                  <FormControl>
                    <Select 
                      onValueChange={(value: string) => field.onChange(parseInt(value))}
                      value={field.value ? field.value.toString() : ""}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a house" />
                      </SelectTrigger>
                      <SelectContent>
                        {houses.map((house) => (
                          <SelectItem key={house.id} value={house.id.toString()}>
                            <div className="flex items-center gap-2">
                              <div 
                                className={`w-3 h-3 rounded-full`} 
                                style={{ backgroundColor: house.color.replace('-600', '') }}
                              />
                              {house.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}