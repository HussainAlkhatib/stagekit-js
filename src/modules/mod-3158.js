'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3158",
  name: "Replace \"L\" with \"y\"",
  description: "Replaces every L with y.",
  run: (value) => String(value).split("L").join("y"),
});
