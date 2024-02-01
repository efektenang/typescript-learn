async function getUser(): Promise<{
    id: string;
    name: string;
}> {
    return {
        id: '180101',
        name: 'Muhammad Arizky'
    }
}

type isUser = Awaited<ReturnType<typeof getUser>>

async function printUser(): Promise<void> {
    const user: isUser = await getUser()
    console.log(user)
}

printUser()