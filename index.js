'use strict'

const fs = require('fs')
const request = require('request')
const fileExtension = require('file-extension')

module.exports = function slackEmojiDownload (emoji, directory) {
  Object.keys(emoji).forEach(name => {
    const url = emoji[name]
    const extension = fileExtension(url)
    try {
      request(url)
        .pipe(fs.createWriteStream(`${directory}/${name}.${extension}`))
    } catch (error) {
      console.error(`Failed to download ${name}: ${url}`)
    }
  })
}
