'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3461",
  name: "Replace \"Q\" with \"w\"",
  description: "Replaces every Q with w.",
  run: (value) => String(value).split("Q").join("w"),
});
