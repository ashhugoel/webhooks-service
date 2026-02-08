import { Item, ItemContent, ItemTitle } from './ui/item'

export async function ListWebhooks() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/webhooks`,
        {
            cache: 'no-store'
        }
    )
    const data = (await res.json()) as { webhooks: string[] }

    if (data.webhooks.length <= 0)
        return (
            <div className="flex justify-center items-center h-full w-full max-w-md flex-col gap-2 font-light ">
                <ItemTitle>Please Register any webhook</ItemTitle>
            </div>
        )

    return (
        <div className="flex w-full max-w-md flex-col gap-2 font-light ">
            {data.webhooks.map((urlName, i) => {
                return (
                    <Item
                        key={i}
                        className="py-1 px-2 hover:bg-background/90 cursor-pointer"
                        variant="outline">
                        <ItemContent>
                            <ItemTitle>
                                <a
                                    target="_blank"
                                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/api/webhooks/${urlName}`}>{`${process.env.NEXT_PUBLIC_BASE_URL}/api/webhooks/${urlName}`}</a>
                            </ItemTitle>
                        </ItemContent>
                    </Item>
                )
            })}
        </div>
    )
}
