import { NextRequest, NextResponse } from 'next/server'
import webhooksRegistry from '@/config/webhooks.json'

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params
    if ((webhooksRegistry as string[]).includes(slug)) {
        const body = await req.json()
        console.log(
            `[/${slug}]`,
            JSON.stringify(
                {
                    method: req.method,
                    headers: Object.fromEntries(req.headers),
                    body
                },
                null,
                2
            )
        )

        return new NextResponse('OK', { status: 200 })
    }

    return NextResponse.json(
        {
            message:
                'Webhook is not registered yet, try generating a new webhook first.'
        },
        { status: 404 }
    )
}
