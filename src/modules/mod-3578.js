'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3578",
  name: "Replace \"S\" with \"r\"",
  description: "Replaces every S with r.",
  run: (value) => String(value).split("S").join("r"),
});
