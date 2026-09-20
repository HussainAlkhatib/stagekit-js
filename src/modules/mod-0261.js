'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0261",
  name: "Replace \"a\" with \"w\"",
  description: "Replaces every a with w.",
  run: (value) => String(value).split("a").join("w"),
});
