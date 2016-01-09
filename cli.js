#!/usr/bin/env node
'use strict'

const fs = require('fs')
const slackEmojiDownload = require('./')
const argv = require('yargs')
  .usage('Usage: slack-emoji-download -d [directory] -f [emoji.list/json file]')
  .demand('d')
  .alias('d', 'directory')
  .nargs('d', 1)
  .default('f', 'emoji.list')
  .help('h')
  .alias('h', 'help')
  .argv

fs.mkdirSync(argv.directory)
const emojiData = fs.readFileSync('emoji.json', 'utf8')
const emoji = JSON.parse(emojiData).emoji
slackEmojiDownload(emoji)
