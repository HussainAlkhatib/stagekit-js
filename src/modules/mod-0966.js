'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0966",
  name: "Replace \"d\" with \"T\"",
  description: "Replaces every d with T.",
  run: (value) => String(value).split("d").join("T"),
});
