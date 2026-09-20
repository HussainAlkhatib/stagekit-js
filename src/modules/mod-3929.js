'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3929",
  name: "Replace \"Y\" with \"c\"",
  description: "Replaces every Y with c.",
  run: (value) => String(value).split("Y").join("c"),
});
