'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2748",
  name: "Replace \"E\" with \"Q\"",
  description: "Replaces every E with Q.",
  run: (value) => String(value).split("E").join("Q"),
});
