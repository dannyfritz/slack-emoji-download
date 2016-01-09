# Download Slack Emoji

Given an emoji.json file from Slack's [emoji.list](https://api.slack.com/methods/emoji.list) API method
this module will download all of the emoji images and name of after their names.

## Usage

To take the file `emoji.list` and download all the images to an `images` folder:
```sh
$ slack-emoji-download -d images
```

To take the file `emoji.json` and download all the images to an `images` folder:
```sh
$ slack-emoji-download -d images -f emoji.json
```
