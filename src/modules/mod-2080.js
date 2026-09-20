'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2080",
  name: "Replace \"t\" with \"T\"",
  description: "Replaces every t with T.",
  run: (value) => String(value).split("t").join("T"),
});
