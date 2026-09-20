'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2603",
  name: "Replace \"C\" with \"s\"",
  description: "Replaces every C with s.",
  run: (value) => String(value).split("C").join("s"),
});
