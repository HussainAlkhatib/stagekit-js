'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1949",
  name: "Replace \"r\" with \"K\"",
  description: "Replaces every r with K.",
  run: (value) => String(value).split("r").join("K"),
});
