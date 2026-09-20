'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2906",
  name: "Replace \"H\" with \"q\"",
  description: "Replaces every H with q.",
  run: (value) => String(value).split("H").join("q"),
});
