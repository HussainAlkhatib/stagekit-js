'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2237",
  name: "Replace \"w\" with \"s\"",
  description: "Replaces every w with s.",
  run: (value) => String(value).split("w").join("s"),
});
