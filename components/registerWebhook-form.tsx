import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { handleRegisterWebhook } from '@/app/_actions/actions'
import RegisterFormButton from './registerFormbtn'
import { ListWebhooks } from './ListWebhooks'
import { Suspense } from 'react'
import { Spinner } from './ui/spinner'

export function RegisterWebhook({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form
                        action={handleRegisterWebhook}
                        className="p-6 md:p-8 flex items-center bg-background">
                        <FieldGroup>
                            <div className="flex flex-col items-center gap-2 text-center">
                                <h1 className="text-2xl font-bold">
                                    Register a Webhook
                                </h1>
                                <p className="text-muted-foreground text-sm text-balance">
                                    Configure how we should notify your system
                                </p>
                            </div>
                            <Field>
                                <FieldLabel htmlFor="url">
                                    Webhook URL
                                </FieldLabel>
                                <Input
                                    id="url"
                                    name="url"
                                    type="text"
                                    placeholder="example"
                                    pattern={`^[a-zA-Z0-9_\\-]+$`}
                                    required
                                />
                                <FieldDescription>
                                    We’ll send POST requests to this URL ( Payload would be console in the vercel terminal ).
                                </FieldDescription>
                            </Field>
                            <Field>
                                <RegisterFormButton />
                            </Field>
                        </FieldGroup>
                    </form>
                    <div className="bg-primary-foreground p-3 relative hidden md:block ">
                        <Suspense
                            fallback={
                                <div className='w-full h-full flex justify-center items-center'>
                                    <Spinner  className='size-10'/>
                                </div>
                            }>
                            <ListWebhooks />
                        </Suspense>
                    </div>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                By clicking continue, you agree to our{' '}
                <a href="#">Terms of Service</a> and{' '}
                <a href="#">Privacy Policy</a>.
            </FieldDescription>
        </div>
    )
}
