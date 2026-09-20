'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3689",
  name: "Replace \"U\" with \"g\"",
  description: "Replaces every U with g.",
  run: (value) => String(value).split("U").join("g"),
});
