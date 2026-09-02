import { MessagingProtocol } from '../classes/interfaces/message-protocol';

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('Mensagem enviada: ', msg);
  }
}
