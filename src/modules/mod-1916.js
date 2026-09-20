'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1916",
  name: "Replace \"r\" with \"c\"",
  description: "Replaces every r with c.",
  run: (value) => String(value).split("r").join("c"),
});
