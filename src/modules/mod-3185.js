'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3185",
  name: "Replace \"L\" with \"0\"",
  description: "Replaces every L with 0.",
  run: (value) => String(value).split("L").join("0"),
});
