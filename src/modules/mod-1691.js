'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1691",
  name: "Replace \"n\" with \"w\"",
  description: "Replaces every n with w.",
  run: (value) => String(value).split("n").join("w"),
});
