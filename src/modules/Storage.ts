type HashFunction = (arg1: string) => string
type EncryptFunction = (arg1: string) => string
type DecryptFunction = (arg1: string) => string

export class SecureStorage {
    private hash: HashFunction
    private encrypt: EncryptFunction
    private decrypt: DecryptFunction
    private salt: string

    constructor(hash: HashFunction, encrypt: EncryptFunction, decrypt: DecryptFunction, salt: string) {
        this.hash = hash
        this.encrypt = encrypt
        this.decrypt = decrypt
        this.salt = salt
    }

    public setItem(key: string, value: object) {
        const hashedKey = this.getKey(key)
        const encodedValue = JSON.stringify(value)
        const encryptedValue = this.encrypt(encodedValue)
        localStorage.setItem(hashedKey, encryptedValue)   
    }

    public getItem(key: string): object | null {
        const hashedKey = this.getKey(key)
        const encryptedValue = localStorage.getItem(hashedKey)
        if (!encryptedValue) {
            return null
        }
        const encodedValue = this.decrypt(encryptedValue)
        const value = JSON.parse(encodedValue)
        return value
    }

    private getKey(key: string) {
        return this.hash(this.salt + key)
    }

}