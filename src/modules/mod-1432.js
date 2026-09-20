'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1432",
  name: "Replace \"j\" with \"g\"",
  description: "Replaces every j with g.",
  run: (value) => String(value).split("j").join("g"),
});
