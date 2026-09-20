'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2791",
  name: "Replace \"F\" with \"x\"",
  description: "Replaces every F with x.",
  run: (value) => String(value).split("F").join("x"),
});
