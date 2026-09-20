'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2854",
  name: "Replace \"G\" with \"z\"",
  description: "Replaces every G with z.",
  run: (value) => String(value).split("G").join("z"),
});
