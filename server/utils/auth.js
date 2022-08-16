const jwt = require('jsonwebtoken');

const secret = 'guarnierilagoback';
const expiration = '2h';

module.exports = {
  signToken: function ({ firstName, lastName, phone, github, company, email, password, languages, frameworks, platforms}) {
    const payload = { firstName, lastName, phone, github, company, email, password, languages, frameworks, platforms};
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
