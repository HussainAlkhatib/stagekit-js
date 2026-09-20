'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2761",
  name: "Replace \"E\" with \"3\"",
  description: "Replaces every E with 3.",
  run: (value) => String(value).split("E").join("3"),
});
