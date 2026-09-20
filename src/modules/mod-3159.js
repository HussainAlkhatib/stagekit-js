'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3159",
  name: "Replace \"L\" with \"z\"",
  description: "Replaces every L with z.",
  run: (value) => String(value).split("L").join("z"),
});
