'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2467",
  name: "Replace \"A\" with \"e\"",
  description: "Replaces every A with e.",
  run: (value) => String(value).split("A").join("e"),
});
