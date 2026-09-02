// import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/message-protocol';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
// const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer('Pedro', 'Serafini', '123.456.789-00');
const enterpriseCustomer = new EnterpriseCustomer('Empresa LTDA', '123.456.789/0001-00');

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('Mensagem enviada pelo Mock');
  }
}

const messagingMock = new MessagingMock();

const order = new Order(shoppingCart, messagingMock, persistency, enterpriseCustomer);

shoppingCart.addItem(new Product('Camiseta', 49.9));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
