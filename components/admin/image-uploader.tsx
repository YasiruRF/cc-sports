'use client';

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Upload, Loader2 } from "lucide-react"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

interface ImageUploaderProps {
  eventId: number
  onUploadComplete: (imageUrl: string) => void
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageUploader({ eventId, onUploadComplete, open, onOpenChange }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0]
      if (!file) return

      setUploading(true)

      // Upload file to Supabase storage
      const fileExt = file.name.split('.').pop()
      const fileName = `${eventId}-${Math.random()}.${fileExt}`
      const { data, error } = await supabase.storage
        .from('CCSC')
        .upload(`event-images/${fileName}`, file)

      if (error) throw error

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('CCSC')
        .getPublicUrl(`event-images/${fileName}`)

      onUploadComplete(publicUrl)
      onOpenChange(false)
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Event Image</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-4 text-muted-foreground" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">PNG, JPG or WEBP (MAX. 5MB)</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/png,image/jpeg,image/webp"
                onChange={handleFileUpload}
                disabled={uploading}
              />
            </label>
          </div>
          {uploading && (
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <p className="text-sm text-muted-foreground">Uploading...</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}