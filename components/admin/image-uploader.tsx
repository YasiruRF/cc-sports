'use client';

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Upload, Loader2, X } from "lucide-react"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

interface ImageUploaderProps {
  eventId: number
  onUploadComplete: (imageUrls: string[]) => void
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageUploader({ eventId, onUploadComplete, open, onOpenChange }: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState<number>(0)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || [])
    setSelectedFiles(prev => [...prev, ...files])
    // Reset the input value so the same file can be selected again
    event.target.value = ''
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return

    setUploading(true)
    const uploadedUrls: string[] = []
    
    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i]
        const fileExt = file.name.split('.').pop()
        const fileName = `${eventId}-${Math.random()}.${fileExt}`
        
        // Upload file to Supabase storage in event-specific folder
        const { data, error } = await supabase.storage
          .from('CCSC')
          .upload(`event-images/${eventId}/${fileName}`, file)

        if (error) throw error

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('CCSC')
          .getPublicUrl(`event-images/${eventId}/${fileName}`)

        uploadedUrls.push(publicUrl)
        setUploadProgress(((i + 1) / selectedFiles.length) * 100)
      }

      onUploadComplete(uploadedUrls)
      onOpenChange(false)
      setSelectedFiles([])
      setUploadProgress(0)
    } catch (error) {
      console.error('Error uploading images:', error)
      alert('Failed to upload one or more images. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Event Images</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50">
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
                onChange={handleFileSelect}
                disabled={uploading}
                multiple
              />
            </label>
          </div>

          {selectedFiles.length > 0 && (
            <div className="space-y-4">
              <div className="max-h-40 overflow-y-auto space-y-2">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <span className="text-sm truncate max-w-[80%]">{file.name}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFile(index)}
                      disabled={uploading}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>

              <div className="space-y-2">
                {uploading && (
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                    <p className="text-sm text-center text-muted-foreground">
                      Uploading {Math.round(uploadProgress)}%
                    </p>
                  </div>
                )}

                <Button 
                  className="w-full" 
                  onClick={handleUpload}
                  disabled={uploading || selectedFiles.length === 0}
                >
                  {uploading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload {selectedFiles.length} {selectedFiles.length === 1 ? 'file' : 'files'}
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}