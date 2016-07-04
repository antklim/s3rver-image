const nconf = require('nconf')
const path = require('path')
const S3rver = require('s3rver')


nconf.argv().env().defaults({
  port: 3000,
  hostname: undefined,
  silent: false,
  directory: path.join(__dirname, 's3')
})


const opts = {
  port: nconf.get('port'),
  hostname: nconf.get('hostname'),
  silent: nconf.get('silent'),
  directory: nconf.get('directory')
}


const s3 = new S3rver(opts)
s3.run((err, host, port) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log('S3 server is ready')
})
