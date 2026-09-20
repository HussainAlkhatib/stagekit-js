'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1116",
  name: "Replace \"e\" with \"I\"",
  description: "Replaces every e with I.",
  run: (value) => String(value).split("e").join("I"),
});
