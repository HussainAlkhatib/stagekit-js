'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3187",
  name: "Replace \"L\" with \"2\"",
  description: "Replaces every L with 2.",
  run: (value) => String(value).split("L").join("2"),
});
