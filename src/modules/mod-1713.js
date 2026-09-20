'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1713",
  name: "Replace \"n\" with \"S\"",
  description: "Replaces every n with S.",
  run: (value) => String(value).split("n").join("S"),
});
