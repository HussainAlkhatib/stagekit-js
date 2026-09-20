'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1660",
  name: "Replace \"m\" with \"0\"",
  description: "Replaces every m with 0.",
  run: (value) => String(value).split("m").join("0"),
});
