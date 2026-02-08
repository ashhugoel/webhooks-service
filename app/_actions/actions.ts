'use server'
import { revalidatePath } from 'next/cache'
import webhooksRegistry from '@/config/webhooks'

export async function handleRegisterWebhook(formData: FormData) {
    let param = formData.get('url') as string

    if (!webhooksRegistry.includes(param)) {
        webhooksRegistry.push(param)
        console.log('added', webhooksRegistry)

        return revalidatePath('/')
    }
}
