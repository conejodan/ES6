const texto ='Hola Mundo';
console.log(texto, 'empieza con h:', texto.toLowerCase().startsWith('h'));

console.log(texto, 'termina con o:', texto.toLowerCase().endsWith('o'));

console.log(texto, 'incluye la palabra Daniel',texto.includes('Daniel'));

const amigos = ['daniel', 'adrian', 'isaac', 'kike'];

console.log(amigos.includes('daniel'));

console.log(amigos.find(amigo=>amigo.length>5));

console.log(amigos.findIndex(amigo=>amigo === 'kike'));