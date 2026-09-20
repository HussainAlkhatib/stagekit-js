'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1923",
  name: "Replace \"r\" with \"j\"",
  description: "Replaces every r with j.",
  run: (value) => String(value).split("r").join("j"),
});
