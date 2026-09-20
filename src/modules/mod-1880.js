'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1880",
  name: "Replace \"q\" with \"C\"",
  description: "Replaces every q with C.",
  run: (value) => String(value).split("q").join("C"),
});
