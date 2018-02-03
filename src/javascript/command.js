const Client = require('ssh2').Client
const { auth } = require('../../config')

const conn = new Client()

const command = (cmd, host) => {
  auth.host = host;

  return new Promise((resolve, reject) => {
    conn
      .on('ready', () => {
        console.log('Client :: ready')

        conn.exec(cmd, (err, stream) => {
          if (err) {
            throw err
          }

          stream
            .on('close', (code, signal) => {
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
