'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2116",
  name: "Replace \"u\" with \"t\"",
  description: "Replaces every u with t.",
  run: (value) => String(value).split("u").join("t"),
});
