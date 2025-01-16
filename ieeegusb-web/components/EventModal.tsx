'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RegistrationForm from './RegistrationForm'
import TicketPurchase from './TicketPurchase'

interface Event {
  id: number
  title: string
  date: string
  image: string
}

export default function EventModal({ event, isOpen, onClose }: { event: Event, isOpen: boolean, onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('details')

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
          <DialogDescription>
            {new Date(event.date).toLocaleDateString()}
          </DialogDescription>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <p className="text-muted-foreground">
              Join us for an exciting event featuring the latest developments in technology. 
              Network with industry professionals and gain valuable insights.
            </p>
          </TabsContent>
          <TabsContent value="register">
            <RegistrationForm eventId={event.id} />
          </TabsContent>
          <TabsContent value="tickets">
            <TicketPurchase eventId={event.id} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

