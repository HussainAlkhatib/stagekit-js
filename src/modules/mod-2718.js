'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2718",
  name: "Replace \"E\" with \"l\"",
  description: "Replaces every E with l.",
  run: (value) => String(value).split("E").join("l"),
});
