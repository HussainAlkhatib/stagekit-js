'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2384",
  name: "Replace \"y\" with \"S\"",
  description: "Replaces every y with S.",
  run: (value) => String(value).split("y").join("S"),
});
