'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1945",
  name: "Replace \"r\" with \"G\"",
  description: "Replaces every r with G.",
  run: (value) => String(value).split("r").join("G"),
});
