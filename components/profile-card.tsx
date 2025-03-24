import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ProfileCardProps {
  name: string
  description: string
  imageSrc: string
}

export function ProfileCard({ name, description, imageSrc }: ProfileCardProps) {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="flex items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <Image src={imageSrc || "/placeholder.svg"} alt={name} width={128} height={128} className="object-cover" />
        </div>
        <CardTitle className="text-2xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

