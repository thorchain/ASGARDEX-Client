export class Bridge {
    private bridge: any
    private openPromise: Promise<any>
    constructor(binaryUri: string, nodeUri?: string) {
        this.bridge = THORChainBridge(binaryUri, nodeUri)
        this.openPromise = this.bridge.runner.loadBinary()
            .then(this.bridge.runner.run)
    }

    public open() {
        return this.openPromise
    }

    public send(from: string, to: string, coins: string, privKey: string) {
        return this.bridge.client.send(from, to, coins, privKey)
    }

    public broadcast(signedTx: string) {
        return this.bridge.client.broadcast(signedTx)
    }
}