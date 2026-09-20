'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1655",
  name: "Replace \"m\" with \"V\"",
  description: "Replaces every m with V.",
  run: (value) => String(value).split("m").join("V"),
});
