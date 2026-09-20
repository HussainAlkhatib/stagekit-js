'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2739",
  name: "Replace \"E\" with \"H\"",
  description: "Replaces every E with H.",
  run: (value) => String(value).split("E").join("H"),
});
