'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3188",
  name: "Replace \"L\" with \"3\"",
  description: "Replaces every L with 3.",
  run: (value) => String(value).split("L").join("3"),
});
