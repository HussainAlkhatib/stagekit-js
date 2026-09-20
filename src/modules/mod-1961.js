'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1961",
  name: "Replace \"r\" with \"W\"",
  description: "Replaces every r with W.",
  run: (value) => String(value).split("r").join("W"),
});
