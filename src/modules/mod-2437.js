'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2437",
  name: "Replace \"z\" with \"K\"",
  description: "Replaces every z with K.",
  run: (value) => String(value).split("z").join("K"),
});
