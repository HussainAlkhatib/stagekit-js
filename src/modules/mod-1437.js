'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1437",
  name: "Replace \"j\" with \"m\"",
  description: "Replaces every j with m.",
  run: (value) => String(value).split("j").join("m"),
});
