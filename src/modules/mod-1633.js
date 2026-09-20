'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1633",
  name: "Replace \"m\" with \"z\"",
  description: "Replaces every m with z.",
  run: (value) => String(value).split("m").join("z"),
});
