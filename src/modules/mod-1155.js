'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1155",
  name: "Replace \"e\" with \"V\"",
  description: "Replaces every e with V.",
  run: (value) => String(value).split("e").join("V"),
});
