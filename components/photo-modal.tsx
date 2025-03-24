"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog"

interface PhotoModalProps {
  photos: {
    src: string
    alt: string
  }[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onNavigate: (index: number) => void
}

export function PhotoModal({ photos, currentIndex, isOpen, onClose, onNavigate }: PhotoModalProps) {
  const handlePrevious = () => {
    const newIndex = currentIndex <= 0 ? photos.length - 1 : currentIndex - 1
    onNavigate(newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex >= photos.length - 1 ? 0 : currentIndex + 1
    onNavigate(newIndex)
  }

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === "ArrowLeft") {
        handlePrevious()
      } else if (e.key === "ArrowRight") {
        handleNext()
      } else if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex])

  if (!photos.length) return null

  const currentPhoto = photos[currentIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm" />
        <DialogContent className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 border-none bg-transparent p-0 shadow-none w-full flex items-center justify-center" hideCloseButton>
          <DialogTitle className="sr-only">
            {currentPhoto.alt || "Photo Gallery Image"}
          </DialogTitle>
          
          <Button
            variant="ghost"
            size="icon"
            className="fixed right-4 top-4 z-[60] rounded-full bg-background/50 hover:bg-background/80"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] rounded-full bg-background/50 hover:bg-background/80"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous</span>
          </Button>

          <div className="relative flex items-center justify-center">
            <Image
              src={currentPhoto.src || "/placeholder.svg"}
              alt={currentPhoto.alt}
              width={1200}
              height={800}
              className="max-h-[85vh] max-w-[85vw] h-auto w-auto object-contain"
              priority
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="fixed right-4 top-1/2 -translate-y-1/2 z-[60] rounded-full bg-background/50 hover:bg-background/80"
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next</span>
          </Button>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}

