'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3143",
  name: "Replace \"L\" with \"j\"",
  description: "Replaces every L with j.",
  run: (value) => String(value).split("L").join("j"),
});
