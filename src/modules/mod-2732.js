'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2732",
  name: "Replace \"E\" with \"z\"",
  description: "Replaces every E with z.",
  run: (value) => String(value).split("E").join("z"),
});
