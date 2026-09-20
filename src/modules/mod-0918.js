'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0918",
  name: "Replace \"d\" with \"D\"",
  description: "Replaces every d with D.",
  run: (value) => String(value).split("d").join("D"),
});
