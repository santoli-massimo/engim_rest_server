/**
 * ShowController
 *
 * @description :: Server-side logic for managing shows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  subscribe: function(req,res){
    if(req.isSocket){
      sails.log.info('yep');
      var socket = req.socket;
      var io = sails.io;
      sails.sockets.send('message', {});
      
      return res.ok()
    }
    return res.ok()
  },
  create : false,
  update : false,
  destroy : false,
};

