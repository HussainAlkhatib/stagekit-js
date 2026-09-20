'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2221",
  name: "Replace \"w\" with \"c\"",
  description: "Replaces every w with c.",
  run: (value) => String(value).split("w").join("c"),
});
