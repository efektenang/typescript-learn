function logMessage(this: {
    timestamps: string
}, message: string) {
    console.log(`[${this.timestamps}] ${message}`)
}

type LogMessage = ThisParameterType<typeof logMessage>

const context: LogMessage = { timestamps: "2024-02-01" }
logMessage.call(context, "hello, Arizky")