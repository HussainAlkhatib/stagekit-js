'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2490",
  name: "Replace \"A\" with \"C\"",
  description: "Replaces every A with C.",
  run: (value) => String(value).split("A").join("C"),
});
