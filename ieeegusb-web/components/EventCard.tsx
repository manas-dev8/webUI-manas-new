'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import EventModal from './EventModal'

interface Event {
  id: number
  title: string
  date: string
  image: string
}

export default function EventCard({ event }: { event: Event }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardContent className="p-0">
          <Image src={event.image} alt={event.title} width={600} height={400} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-muted-foreground">{new Date(event.date).toLocaleDateString()}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsModalOpen(true)} className="w-full">Learn More</Button>
        </CardFooter>
      </Card>
      <EventModal event={event} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

