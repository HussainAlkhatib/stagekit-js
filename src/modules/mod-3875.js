'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3875",
  name: "Replace \"X\" with \"j\"",
  description: "Replaces every X with j.",
  run: (value) => String(value).split("X").join("j"),
});
