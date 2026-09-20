'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2411",
  name: "Replace \"z\" with \"j\"",
  description: "Replaces every z with j.",
  run: (value) => String(value).split("z").join("j"),
});
