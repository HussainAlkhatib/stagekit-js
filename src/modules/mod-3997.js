'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3997",
  name: "Replace \"Z\" with \"j\"",
  description: "Replaces every Z with j.",
  run: (value) => String(value).split("Z").join("j"),
});
