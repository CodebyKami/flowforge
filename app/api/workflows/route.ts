import { NextResponse } from 'next/server'

export async function GET() {
  // TODO: Fetch workflows from database
  const workflows = [
    {
      id: '1',
      name: 'Gmail to Slack',
      description: 'Forward important emails to Slack',
      isActive: true,
      trigger: { type: 'gmail', config: {} },
      actions: [{ type: 'slack', config: {} }],
      createdAt: new Date().toISOString(),
    },
  ]

  return NextResponse.json({ workflows })
}

export async function POST(request: Request) {
  const body = await request.json()
  
  // TODO: Save workflow to database
  console.log('Creating workflow:', body)

  return NextResponse.json({
    success: true,
    workflow: {
      id: Math.random().toString(36).substr(2, 9),
      ...body,
      createdAt: new Date().toISOString(),
    },
  })
}