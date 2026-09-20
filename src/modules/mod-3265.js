'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3265",
  name: "Replace \"N\" with \"j\"",
  description: "Replaces every N with j.",
  run: (value) => String(value).split("N").join("j"),
});
