'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2250",
  name: "Replace \"w\" with \"G\"",
  description: "Replaces every w with G.",
  run: (value) => String(value).split("w").join("G"),
});
