'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2418",
  name: "Replace \"z\" with \"q\"",
  description: "Replaces every z with q.",
  run: (value) => String(value).split("z").join("q"),
});
