'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1813",
  name: "Replace \"p\" with \"w\"",
  description: "Replaces every p with w.",
  run: (value) => String(value).split("p").join("w"),
});
