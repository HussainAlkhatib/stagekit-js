'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3213",
  name: "Replace \"M\" with \"s\"",
  description: "Replaces every M with s.",
  run: (value) => String(value).split("M").join("s"),
});
