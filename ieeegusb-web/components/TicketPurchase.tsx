'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "../hooks/use-toast"

export default function TicketPurchase({ eventId }: { eventId: number }) {
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()

  const handlePurchase = () => {
    // Here you would typically integrate with a payment gateway
    toast({
      title: "Purchase Successful!",
      description: `You've purchased ${quantity} ticket(s) for the event.`,
    })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Label htmlFor="quantity">Quantity:</Label>
        <Input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-20"
        />
      </div>
      <p className="text-lg font-semibold">Total: ${quantity * 10}</p>
      <Button onClick={handlePurchase} className="w-full">Purchase Tickets</Button>
    </div>
  )
}

