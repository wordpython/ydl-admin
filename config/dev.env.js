'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://47.112.103.249:8210"',
  OSS_PATH: '"https://ydl-edu-file.oss-cn-shenzhen.aliyuncs.com"'
})
