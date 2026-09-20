'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2751",
  name: "Replace \"E\" with \"T\"",
  description: "Replaces every E with T.",
  run: (value) => String(value).split("E").join("T"),
});
