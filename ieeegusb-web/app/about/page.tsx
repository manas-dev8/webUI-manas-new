"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Zap, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import { SocialPost } from "@/components/ui/social-post"
import { useRef, useState } from 'react'
import Link from 'next/link'



export default function AboutIEEE() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up">About IEEE at Galgotias University</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg">
              IEEE (Institute of Electrical and Electronics Engineers) is the world&apos;s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
            </p>
            <p className="text-lg">
              At Galgotias University, the IEEE Student Branch provides a platform for students to enhance their technical skills, network with professionals, and contribute to technological advancements.
            </p>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-lg">
              To foster technological innovation and excellence for the benefit of humanity, while promoting the professional development of our student members.
            </p>
            <h3 className="text-xl font-semibold">What We Offer</h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Technical workshops and seminars</li>
              <li>Industry expert talks and panel discussions</li>
              <li>Project development opportunities</li>
              <li>Networking events with professionals</li>
              <li>Access to IEEE&apos;s vast digital library</li>
            </ul>
            <div className="flex space-x-4 mt-6">
                <Button className="transition-all duration-300 hover:scale-105 bg-black text-white hover:text-black">Join IEEE Galgotias</Button>
              {/* <Button className="transition-all duration-300 rounded-sm hover:scale-105 bg-black text-white hover:text-black">Join IEEE Galgotias</Button> */}
              <Link href="https://tr.ee/VZE64pxyk4">
              <Button variant="outline" className="flex items-center transition-all duration-300 hover:scale-105">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Our Linktree
              </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-6 animate-fade-in-right">
            <div className="grid gap-4">
              <Card className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2" />
                    Learning Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Access to workshops, seminars, and technical talks by industry experts.</CardDescription>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2" />
                    Networking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Connect with peers, professors, and professionals in the field of technology.</CardDescription>
                </CardContent>
              </Card>
              <Card className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="mr-2" />
                    Innovation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Participate in projects and competitions to showcase your technical skills.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="mt-12 animate-fade-in-up">
          <h3 className="text-2xl font-semibold mb-4">Recent Activities</h3>
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
              onScroll={handleScroll}
            >
              <SocialPost 
                type="instagram"
                imageUrl="/placeholder.svg?height=300&width=300"
                title="AI Workshop"
                content="Join us for an exciting AI workshop this weekend! #IEEEGalgotias #AIWorkshop"
              />
              <SocialPost 
                type="linkedin"
                imageUrl="/placeholder.svg?height=300&width=300"
                title="Alumni Spotlight"
                content="Congratulations to our alumni on their recent achievements in the tech industry! #IEEESuccess"
              />
              <SocialPost 
                type="instagram"
                imageUrl="/placeholder.svg?height=300&width=300"
                title="Hackathon Winners"
                content="Proud of our students who won the national hackathon! #IEEEHackathon"
              />
              <SocialPost 
                type="linkedin"
                imageUrl="/placeholder.svg?height=300&width=300"
                title="Industry Talk"
                content="Don't miss our upcoming talk on 'Future of IoT' by industry expert! #IEEETalk"
              />
            </div>
            {canScrollLeft && (
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm"
                onClick={() => scroll('left')}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}
            {canScrollRight && (
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm"
                onClick={() => scroll('right')}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

