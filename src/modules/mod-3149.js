'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3149",
  name: "Replace \"L\" with \"p\"",
  description: "Replaces every L with p.",
  run: (value) => String(value).split("L").join("p"),
});
