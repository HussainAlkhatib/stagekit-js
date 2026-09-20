'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0215",
  name: "Interleave with \"|\"",
  description: "Joins every character with \"|\".",
  run: (value) => String(value).split('').join("|"),
});
