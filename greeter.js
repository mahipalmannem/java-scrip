const greet = language => name => {
  switch(language.toLowerCase()) {
    case 'english':
      return `Hello, ${name}!`;
    case 'spanish':
      return `¡Hola, ${name}!`;
    case 'french':
      return `Bonjour, ${name}!`;
    case 'german':
      return `Hallo, ${name}!`;
    default:
      return `Hi, ${name}!`;
  }
};
console.log(greet('English')('Alice')); // Hello, Alice!
console.log(greet('Spanish')('Carlos')); // ¡Hola, Carlos!
console.log(greet('French')('Marie'));  // Bonjour, Marie!
