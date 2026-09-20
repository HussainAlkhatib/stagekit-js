'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2368",
  name: "Replace \"y\" with \"C\"",
  description: "Replaces every y with C.",
  run: (value) => String(value).split("y").join("C"),
});
