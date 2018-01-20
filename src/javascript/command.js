var Client = require('ssh2').Client
var conn = new Client()

const command = (cmd, auth) => {
  return new Promise((resolve, reject) => {
    conn
      .on('ready', function() {
        console.log('Client :: ready')

        conn.exec(cmd, function(err, stream) {
          if (err) throw err

          stream
            .on('close', function(code, signal) {
              console.log(
                'Stream :: close :: code: ' + code + ', signal: ' + signal
              )
              conn.end()
            })
            .on('data', data => resolve(data))
            .stderr.on('data', data => reject(data))
        })
      })
      .connect(auth)
  })
}

module.exports = command
