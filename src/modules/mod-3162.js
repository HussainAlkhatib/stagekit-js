'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3162",
  name: "Replace \"L\" with \"C\"",
  description: "Replaces every L with C.",
  run: (value) => String(value).split("L").join("C"),
});
