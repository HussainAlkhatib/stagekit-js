'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1068",
  name: "Replace \"e\" with \"s\"",
  description: "Replaces every e with s.",
  run: (value) => String(value).split("e").join("s"),
});
