'use strict';

module.exports = (capability) => {
  return (req, res, next) => {
    try {
      if(req.user.capabilities.includes(capability)) {
        next()
      } else {
        next('access denied')
      }
    } catch (e) {
      next('invalid login')
    }
  }
}

acl('read')