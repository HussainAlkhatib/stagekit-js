'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0897",
  name: "Replace \"d\" with \"w\"",
  description: "Replaces every d with w.",
  run: (value) => String(value).split("d").join("w"),
});
