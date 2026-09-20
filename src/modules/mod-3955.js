'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3955",
  name: "Replace \"Y\" with \"C\"",
  description: "Replaces every Y with C.",
  run: (value) => String(value).split("Y").join("C"),
});
