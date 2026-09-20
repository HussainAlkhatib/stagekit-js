'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2413",
  name: "Replace \"z\" with \"l\"",
  description: "Replaces every z with l.",
  run: (value) => String(value).split("z").join("l"),
});
