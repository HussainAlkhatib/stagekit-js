'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2119",
  name: "Replace \"u\" with \"x\"",
  description: "Replaces every u with x.",
  run: (value) => String(value).split("u").join("x"),
});
