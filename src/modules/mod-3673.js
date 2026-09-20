'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3673",
  name: "Replace \"T\" with \"0\"",
  description: "Replaces every T with 0.",
  run: (value) => String(value).split("T").join("0"),
});
