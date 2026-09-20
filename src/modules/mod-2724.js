'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2724",
  name: "Replace \"E\" with \"r\"",
  description: "Replaces every E with r.",
  run: (value) => String(value).split("E").join("r"),
});
