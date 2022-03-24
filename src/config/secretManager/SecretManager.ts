import { SecretsManager } from 'aws-sdk';

export default class SecretManagerHandler {
  secretManager: any;
  constructor() {
    this.secretManager = new SecretsManager({ region: 'us-east-1' });
  }

  async getSecret(secretId: string): Promise<any> {
    const secret = await this.secretManager.getSecretValue({
      secretId,
    });
    if ('SecretString' in secret) {
      console.log('aqui1');
      console.log(secret.SecretString);
    } else {
      console.log('aqui2');
      console.log(secret.SecretBinary);
    }
    return secret;
  }
}
