'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1325",
  name: "Replace \"h\" with \"w\"",
  description: "Replaces every h with w.",
  run: (value) => String(value).split("h").join("w"),
});
