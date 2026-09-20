'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1035",
  name: "Replace \"e\" with \"h\"",
  description: "Replaces every e with h.",
  run: (value) => String(value).split("e").join("h"),
});
