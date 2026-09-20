'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3152",
  name: "Replace \"L\" with \"s\"",
  description: "Replaces every L with s.",
  run: (value) => String(value).split("L").join("s"),
});
