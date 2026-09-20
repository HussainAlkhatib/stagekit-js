'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0909",
  name: "Replace \"d\" with \"A\"",
  description: "Replaces every d with A.",
  run: (value) => String(value).split("d").join("A"),
});
