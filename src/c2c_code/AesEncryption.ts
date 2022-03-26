const crypto = require('crypto');
const encryptionType = 'aes-256-cbc';
const encryptionEncoding = 'hex';
const bufferEncryption = 'utf-8';
class AesEncryption {

  AesKey: string;
  AesIV: string;
  init() {
    this.AesKey = 'ABCDEFGHJKLMNOPQRSTUVWXYZABCDEF';
    this.AesIV = 'ABCDEFGHIJKLMNOP';
  }

  encrypt(jsonObject: Record<string, any>): string {
    const val = JSON.stringify(jsonObject);
    const key = Buffer.from(this.AesKey, bufferEncryption);
    const iv = Buffer.from(this.AesIV, bufferEncryption);
    const cipher = crypto.createCipheriv(encryptionType, key, iv);
    let encrypted = cipher.update(val, bufferEncryption, encryptionEncoding);
    encrypted += cipher.final(encryptionEncoding);
    return encrypted;
  }

  decrypt(base64String: string): any {
    const buff = Buffer.from(base64String, encryptionEncoding);
    const key = Buffer.from(this.AesKey, bufferEncryption);
    const iv = Buffer.from(this.AesIV, bufferEncryption);
    const decipher = crypto.createDecipheriv(encryptionType, key, iv);
    const deciphered = decipher.update(buff) + decipher.final();
    return JSON.parse(deciphered);
  }
}

export default new AesEncryption;
