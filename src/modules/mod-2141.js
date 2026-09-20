'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2141",
  name: "Replace \"u\" with \"T\"",
  description: "Replaces every u with T.",
  run: (value) => String(value).split("u").join("T"),
});
