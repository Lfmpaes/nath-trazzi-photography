import { PhotoCarousel } from "@/components/photo-carousel"

const studioPhotos = [
  { src: "/placeholder.svg?height=600&width=900", alt: "Studio portrait" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Fashion photography" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Commercial shoot" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Editorial photography" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Creative lighting setup" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Studio environment" },
]

export default function StudioPage() {
  return (
    <div className="container py-12 space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-serif font-medium tracking-tight">Studio</h1>
        <p className="text-muted-foreground max-w-2xl">
          Professional studio photography featuring controlled lighting, creative direction, and artistic vision.
        </p>
      </section>

      <section className="py-8">
        <PhotoCarousel photos={studioPhotos} />
      </section>
    </div>
  )
}

