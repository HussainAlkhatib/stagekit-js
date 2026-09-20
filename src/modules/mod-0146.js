'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0146",
  name: "HTML unescape",
  description: "Unescapes HTML entities.",
  run: (value) => String(value).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'),
});
