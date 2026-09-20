'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1312",
  name: "Replace \"h\" with \"j\"",
  description: "Replaces every h with j.",
  run: (value) => String(value).split("h").join("j"),
});
