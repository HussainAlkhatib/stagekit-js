'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1095",
  name: "Replace \"e\" with \"B\"",
  description: "Replaces every e with B.",
  run: (value) => String(value).split("e").join("B"),
});
