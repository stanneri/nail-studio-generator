import { NextRequest, NextResponse } from 'next/server'
import { NailDesignInput } from '@/lib/types'

export const maxDuration = 60

export async function POST(request: NextRequest) {
  let body: NailDesignInput

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!body.shape || !body.length || !body.colors?.trim() || !body.style) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL
  if (!webhookUrl) {
    return NextResponse.json(
      { error: 'Image generation is not configured' },
      { status: 500 }
    )
  }

  try {
    const n8nRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (!n8nRes.ok) {
      const text = await n8nRes.text().catch(() => '')
      console.error('n8n responded with error:', n8nRes.status, text)
      return NextResponse.json(
        { error: 'Image generation failed. Please try again.' },
        { status: 502 }
      )
    }

    const data = await n8nRes.json()
    return NextResponse.json(data)
  } catch (err) {
    console.error('Failed to reach n8n:', err)
    return NextResponse.json(
      { error: 'Could not connect to the generation service.' },
      { status: 503 }
    )
  }
}
