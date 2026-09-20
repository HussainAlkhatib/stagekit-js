'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3138",
  name: "Replace \"L\" with \"e\"",
  description: "Replaces every L with e.",
  run: (value) => String(value).split("L").join("e"),
});
