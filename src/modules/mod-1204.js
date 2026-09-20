'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1204",
  name: "Replace \"f\" with \"x\"",
  description: "Replaces every f with x.",
  run: (value) => String(value).split("f").join("x"),
});
