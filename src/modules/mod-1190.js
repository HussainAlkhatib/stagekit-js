'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1190",
  name: "Replace \"f\" with \"j\"",
  description: "Replaces every f with j.",
  run: (value) => String(value).split("f").join("j"),
});
