import { PhotoCarousel } from "@/components/photo-carousel"

const homePhotos = [
  { src: "https://picsum.photos/seed/1/900/600", alt: "Landscape photography" },
  { src: "https://picsum.photos/seed/2/900/600", alt: "Portrait photography" },
  { src: "https://picsum.photos/seed/3/900/600", alt: "Street photography" },
  { src: "https://picsum.photos/seed/4/900/600", alt: "Architecture photography" },
  { src: "https://picsum.photos/seed/5/900/600", alt: "Nature photography" },
  { src: "https://picsum.photos/seed/6/900/600", alt: "Abstract photography" },
]

export default function Home() {
  return (
    <div className="container py-12 space-y-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-serif font-medium tracking-tight">Welcome to my Portfolio</h1>
        <p className="text-muted-foreground max-w-2xl">
          Capturing moments, emotions, and stories through the lens. Explore my collection of photographs that showcase
          the beauty in everyday life.
        </p>
      </section>

      <section className="py-8">
        <PhotoCarousel photos={homePhotos} />
      </section>
    </div>
  )
}

