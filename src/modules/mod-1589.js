'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1589",
  name: "Replace \"l\" with \"Q\"",
  description: "Replaces every l with Q.",
  run: (value) => String(value).split("l").join("Q"),
});
