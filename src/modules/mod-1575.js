'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1575",
  name: "Replace \"l\" with \"C\"",
  description: "Replaces every l with C.",
  run: (value) => String(value).split("l").join("C"),
});
