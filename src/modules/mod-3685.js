'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3685",
  name: "Replace \"U\" with \"c\"",
  description: "Replaces every U with c.",
  run: (value) => String(value).split("U").join("c"),
});
