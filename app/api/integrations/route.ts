import { NextResponse } from 'next/server'

export async function GET() {
  // TODO: Fetch integrations from database
  const integrations = [
    { id: '1', name: 'gmail', isActive: true },
    { id: '2', name: 'slack', isActive: true },
    { id: '3', name: 'notion', isActive: false },
  ]

  return NextResponse.json({ integrations })
}

export async function POST(request: Request) {
  const body = await request.json()
  
  // TODO: Save integration credentials (encrypted)
  console.log('Connecting integration:', body.name)

  return NextResponse.json({
    success: true,
    integration: {
      id: Math.random().toString(36).substr(2, 9),
      ...body,
      isActive: true,
      createdAt: new Date().toISOString(),
    },
  })
}