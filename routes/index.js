var express = require('express');
var router = express.Router();
var tmi = require("tmi.js")
var ioHook = require("iohook")
var robot = require("robotjs")
var exec = require("child_process")

/* GET home page. */
router.get('/', function(req, res, next) {
  const client = new tmi.Client({
    connection: {
      secure: true,
      reconnect: true
    },
    channels: [ 'BLASTtv']
  });
if (client.connect()){
  exec.exec("gnome-terminal",(err,stdout,stderr)=>{
  console.log(stdout)
  })
  console.log("Working")


}


  client.on('message', (channel, tags, message, self) => {
    // "Alca: Hello, World!"


  console.log(`${tags['display-name']}: ${message}`)


    const CTRL = 29;
    const ALT = 56;
    const F7 = 65;
    const LEFT = 65361;
    if (message.includes(" ")){
      console.log("SPACE")
      robot.keyTap("space")
    }


});

  res.render('index', { title: "WORKING"});
});

module.exports = router;
