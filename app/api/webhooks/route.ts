import { NextRequest, NextResponse } from 'next/server'
import webhooksRegistry from '@/config/webhooks.json'

export async function GET(
    req: NextRequest,
) {


    return NextResponse.json({
        webhooks : webhooksRegistry
    })

}
