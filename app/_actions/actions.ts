'use server'
import fs from 'fs/promises'
import { revalidatePath } from 'next/cache'

export async function handleRegisterWebhook(formData: FormData) {
    let param = formData.get('url')
    const WEBHOOK_PATH = process.cwd() + '/config/webhooks.json'

    const data = JSON.parse(
        await fs.readFile(WEBHOOK_PATH, {
            encoding: 'utf-8'
        })
    )

    if (!data.includes(param)) {
        data.push(param)
        try {
            await fs.writeFile(WEBHOOK_PATH, JSON.stringify(data))
            return revalidatePath('/')
        } catch (err) {
            console.error(err)
        }
    }
}
