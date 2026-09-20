'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2973",
  name: "Replace \"I\" with \"w\"",
  description: "Replaces every I with w.",
  run: (value) => String(value).split("I").join("w"),
});
