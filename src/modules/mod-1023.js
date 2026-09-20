'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1023",
  name: "Replace \"e\" with \"c\"",
  description: "Replaces every e with c.",
  run: (value) => String(value).split("e").join("c"),
});
