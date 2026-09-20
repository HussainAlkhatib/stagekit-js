'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0840",
  name: "Replace \"d\" with \"c\"",
  description: "Replaces every d with c.",
  run: (value) => String(value).split("d").join("c"),
});
