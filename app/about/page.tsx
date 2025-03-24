import { ProfileCard } from "@/components/profile-card"
import { PhotoCarousel } from "@/components/photo-carousel"

const aboutPhotos = [
  { src: "/placeholder.svg?height=600&width=900", alt: "Behind the scenes" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Travel photography" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Personal project" },
  { src: "/placeholder.svg?height=600&width=900", alt: "Exhibition setup" },
]

export default function AboutPage() {
  return (
    <div className="container py-12 space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-serif font-medium tracking-tight">About Me</h1>
        <p className="text-muted-foreground max-w-2xl">
          Learn more about my journey, approach, and passion for photography.
        </p>
      </section>

      <section className="py-8">
        <ProfileCard
          name="Nathalia Trazzi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imageSrc="/nath-sqr.jpg?height=400&width=400"
        />
      </section>

      <section className="py-8">
        <h2 className="text-2xl font-serif font-medium mb-6">My Journey</h2>
        <PhotoCarousel photos={aboutPhotos} />
      </section>
    </div>
  )
}

