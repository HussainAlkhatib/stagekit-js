'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3019",
  name: "Replace \"J\" with \"h\"",
  description: "Replaces every J with h.",
  run: (value) => String(value).split("J").join("h"),
});
