'use client'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { Spinner } from './ui/spinner'

export default function RegisterFormButton() {
    const status = useFormStatus()

    return (
        <Button disabled={status.pending} type="submit">
            {status.pending ? (
                <>
                    <Spinner />
                    <span>Submitting....</span>
                </>
            ) : (
                'Register Webhook'
            )}
        </Button>
    )
}
