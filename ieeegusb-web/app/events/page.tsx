import { Suspense } from 'react'
import EventCard from '@/components/EventCard'
import { Button } from "@/components/ui/button"

async function getEvents() {
  // In a real application, this would fetch from an API or database
  return [
    { id: 1, title: 'Tech Talk: AI in Healthcare', date: '2024-03-15', image: '/placeholder.svg?height=400&width=600' },
    { id: 2, title: 'Workshop: IoT for Beginners', date: '2024-04-01', image: '/placeholder.svg?height=400&width=600' },
    { id: 3, title: 'Hackathon: Sustainable Tech', date: '2024-05-20', image: '/placeholder.svg?height=400&width=600' },
  ]
}

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Suspense fallback={<div>Loading events...</div>}>
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </Suspense>
      </div>
      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">Load More Events</Button>
      </div>
    </div>
  )
}

