'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0051",
  name: "Interleave with \"_\"",
  description: "Joins every character with \"_\".",
  run: (value) => String(value).split('').join("_"),
});
