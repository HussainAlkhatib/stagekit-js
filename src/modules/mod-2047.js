'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2047",
  name: "Replace \"t\" with \"l\"",
  description: "Replaces every t with l.",
  run: (value) => String(value).split("t").join("l"),
});
