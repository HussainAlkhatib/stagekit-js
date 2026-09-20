'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3156",
  name: "Replace \"L\" with \"w\"",
  description: "Replaces every L with w.",
  run: (value) => String(value).split("L").join("w"),
});
