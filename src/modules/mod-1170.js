'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1170",
  name: "Replace \"e\" with \"0\"",
  description: "Replaces every e with 0.",
  run: (value) => String(value).split("e").join("0"),
});
