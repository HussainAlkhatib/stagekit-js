'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2896",
  name: "Replace \"H\" with \"g\"",
  description: "Replaces every H with g.",
  run: (value) => String(value).split("H").join("g"),
});
