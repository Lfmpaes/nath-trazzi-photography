"use client"

import * as React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { PhotoModal } from "@/components/photo-modal"

interface PhotoCarouselProps {
  photos: {
    src: string
    alt: string
  }[]
  className?: string
}

export function PhotoCarousel({ photos, className }: PhotoCarouselProps) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0)

  const handleOpenModal = (index: number) => {
    setCurrentPhotoIndex(index)
    setModalOpen(true)
  }

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className={cn("w-full", className)}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {photos.map((photo, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="overflow-hidden rounded-md cursor-pointer" onClick={() => handleOpenModal(index)}>
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full object-cover transition-all hover:scale-105"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      <PhotoModal
        photos={photos}
        currentIndex={currentPhotoIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNavigate={setCurrentPhotoIndex}
      />
    </>
  )
}

