'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3175",
  name: "Replace \"L\" with \"Q\"",
  description: "Replaces every L with Q.",
  run: (value) => String(value).split("L").join("Q"),
});
