import { PhotoCarousel } from "@/components/photo-carousel"

const stillsPhotos = [
  { src: "/placeholder.svg?height=600&width=900", alt: "Still life composition" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Product photography" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Food photography" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Minimalist still life" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Artistic arrangement" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Conceptual still life" },
]

export default function StillsPage() {
  return (
    <div className="container py-12 space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-serif font-medium tracking-tight">Stills</h1>
        <p className="text-muted-foreground max-w-2xl">
          A collection of still life photography showcasing composition, lighting, and attention to detail.
        </p>
      </section>

      <section className="py-8">
        <PhotoCarousel photos={stillsPhotos} />
      </section>
    </div>
  )
}

