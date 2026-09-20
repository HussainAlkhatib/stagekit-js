'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1925",
  name: "Replace \"r\" with \"l\"",
  description: "Replaces every r with l.",
  run: (value) => String(value).split("r").join("l"),
});
