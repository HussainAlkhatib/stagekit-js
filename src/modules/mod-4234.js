'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4234",
  name: "Replace \"3\" with \"c\"",
  description: "Replaces every 3 with c.",
  run: (value) => String(value).split("3").join("c"),
});
