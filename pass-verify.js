const bcrypt = require('bcrypt');

async function verifyPassword(){
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$LFnd5JigaIeiQQRQMwaMYestlre6kEy2F5ncxFn7Qec1L4H2WTDqC';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
