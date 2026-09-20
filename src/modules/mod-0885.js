'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0885",
  name: "Replace \"d\" with \"s\"",
  description: "Replaces every d with s.",
  run: (value) => String(value).split("d").join("s"),
});
