const jwt = require('jsonwebtoken');

const secret = 'guarnierilagoback';
const expiration = '2h';

module.exports = {
   // function for our authenticated routes
   authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    // if token is not found, then return the request object
    if (!token) {
      return req;
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // return the request object so it can be passed to the resolver as `context`
    return req;
  },
  
  signToken: function ({ email, _id, type, languages = [], frameworks = [], platforms = [], knowledge = []}) {
    const payload = { email, _id, type, languages, frameworks, platforms, knowledge };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
