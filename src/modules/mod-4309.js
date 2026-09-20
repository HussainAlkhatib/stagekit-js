'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4309",
  name: "Replace \"4\" with \"q\"",
  description: "Replaces every 4 with q.",
  run: (value) => String(value).split("4").join("q"),
});
