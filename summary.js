function summary() {
  const cartObject = {
    cartItems: [],

    addToCart: function (name) {
      this.cartItems.push({ name: name, price: Math.floor(Math.random() * 10000) });
      if (name === undefined || typeof name != 'string') {
        console.log('Ошибка. Невозможно добавить товар');
      } else {
        console.log(name + ' успешно дабавлен в корзину');
      }
    },

    viewCart: function () {
      let concatElem = 'В корзине: ';
      if (this.cartItems === undefined) {
        console.log('Корзина пуста');
      } else {
        for (let i = 0; i < this.cartItems.length; i++) {
          let dot = i === (this.cartItems.length) - 1 ? '.' : ', ';
          concatElem += `${this.cartItems[i].name} за ${this.cartItems[i].price}$${dot}`;
        }
        console.log(concatElem);
      }
    },

    total: function () {
      let sum = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        sum += this.cartItems[i].price;
      }
      console.log(sum)
      return sum
    },

    removeFromCart: function (name) {
      let deleted = false;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (name === this.cartItems[i].name) {
          console.log(`${this.cartItems[i].name} удален из корзины`);
          this.cartItems.splice(i, 1);
          deleted = true;
        }
        if (deleted === false) {
          console.log('Такого товара нет в коризне');
        }

      }
    },

    placeOrder: function (num) {
      if (num === undefined || typeof num != 'number') {
        console.log('Извините. Ваш способ оплаты не принят.');
      } else {
        console.log(`Ваш счет: ${this.total()} Вы оплатили данную сумму с карты под номером: ${num}.`);
        this.cartItems = [];
      }
    }

  }

  return cartObject;
}

const basket = summary()