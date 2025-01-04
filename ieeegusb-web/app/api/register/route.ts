import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  
  // Here you would typically save the registration to a database
  console.log('Registration received:', body)

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Return a success response
  return NextResponse.json({ success: true })
}

