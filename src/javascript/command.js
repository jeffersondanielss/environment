const Client = require('ssh2').Client
const {username} = require('../../config')

const conn = new Client()

const command = (cmd, host) => {
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
      .connect({
        host: host,
        username: username,
        privateKey: require('fs').readFileSync(`${process.env['HOME']}/.ssh/id_rsa`)
      })
  })
}

module.exports = command
