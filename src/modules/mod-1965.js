'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1965",
  name: "Replace \"r\" with \"0\"",
  description: "Replaces every r with 0.",
  run: (value) => String(value).split("r").join("0"),
});
