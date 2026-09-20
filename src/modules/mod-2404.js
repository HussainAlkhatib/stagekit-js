'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2404",
  name: "Replace \"z\" with \"c\"",
  description: "Replaces every z with c.",
  run: (value) => String(value).split("z").join("c"),
});
