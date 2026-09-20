'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1327",
  name: "Replace \"h\" with \"y\"",
  description: "Replaces every h with y.",
  run: (value) => String(value).split("h").join("y"),
});
