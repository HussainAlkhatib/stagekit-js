'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1679",
  name: "Replace \"n\" with \"j\"",
  description: "Replaces every n with j.",
  run: (value) => String(value).split("n").join("j"),
});
