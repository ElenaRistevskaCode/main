  
  const userName = 'Elena';
  const age = 29;
  
  function greetUser(name, age) {
    let info = name + ' ' + age;
    return `Hello, ${info}. Glad you're here user.`;
  }

  function greetAdmin() {
    return `Hello, admin. Glad you're here. Welcome to Trackado app.` ;
  }

  function calculateTotal(price, taxRate) {
    return price + (price * taxRate);
  }