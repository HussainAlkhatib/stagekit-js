'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4033",
  name: "Replace \"Z\" with \"T\"",
  description: "Replaces every Z with T.",
  run: (value) => String(value).split("Z").join("T"),
});
