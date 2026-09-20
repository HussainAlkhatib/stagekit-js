'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2852",
  name: "Replace \"G\" with \"x\"",
  description: "Replaces every G with x.",
  run: (value) => String(value).split("G").join("x"),
});
