'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2840",
  name: "Replace \"G\" with \"l\"",
  description: "Replaces every G with l.",
  run: (value) => String(value).split("G").join("l"),
});
