import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Calendar, Award } from "lucide-react"

export default function AwardsPage() {
  return (
    <div className="min-h-screen bg-[#1a1f3c]">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00629B] to-[#0096D6] opacity-90" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Achievements</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Celebrating excellence and innovation at IEEE Student Branch, Galgotias University
          </p>
        </div>
      </section>

      {/* Awards Gallery */}
      <section className="py-16 px-4 md:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Award Ceremonies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {ceremonies.map((ceremony, index) => (
            <div key={index} className="group relative rounded-xl overflow-hidden">
              <Image
                src={ceremony.image || "/placeholder.svg"}
                alt={ceremony.caption}
                width={400}
                height={300}
                className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                <p className="text-white p-4">{ceremony.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Cards */}
      <section className="py-16 px-4 md:px-8 bg-[#151833]">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {awards.map((award, index) => (
            <Card key={index} className="bg-[#1a1f3c] border-[#2a2f4c] text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {award.icon === "trophy" && <Trophy className="w-8 h-8 text-[#0096D6]" />}
                  {award.icon === "award" && <Award className="w-8 h-8 text-[#0096D6]" />}
                  <h3 className="text-xl font-semibold">{award.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{award.description}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{award.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

const ceremonies = [
  {
    image: "/placeholder.svg?height=300&width=400",
    caption: "Annual IEEE Awards Night 2024 - Celebrating Technical Excellence",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    caption: "Regional Student Branch Awards Ceremony",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    caption: "IEEE International Conference Recognition",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    caption: "Technical Project Exhibition Awards",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    caption: "Outstanding Student Branch Activities Recognition",
  },
  {
    image: "/placeholder.svg?height=300&width=400",
    caption: "IEEE Day Celebrations and Achievements",
  },
]

const awards = [
  {
    icon: "trophy",
    title: "Best Student Branch Award",
    description:
      "Recognized for outstanding contributions to technical education and professional development of students.",
    date: "December 2024",
  },
  {
    icon: "award",
    title: "Technical Excellence Award",
    description: "Awarded for exceptional technical projects and innovations in emerging technologies.",
    date: "November 2024",
  },
  {
    icon: "trophy",
    title: "Outstanding Activity Award",
    description: "Honored for organizing impactful technical workshops and conferences throughout the year.",
    date: "October 2024",
  },
  {
    icon: "award",
    title: "Research Innovation Prize",
    description: "Recognized for groundbreaking research contributions in IEEE fields of interest.",
    date: "September 2024",
  },
  {
    icon: "trophy",
    title: "Community Impact Award",
    description: "Awarded for significant contributions to technical education in the local community.",
    date: "August 2024",
  },
  {
    icon: "award",
    title: "Leadership Excellence",
    description: "Recognition for outstanding leadership and management of the student branch.",
    date: "July 2024",
  },
]

