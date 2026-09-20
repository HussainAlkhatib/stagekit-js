'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1806",
  name: "Replace \"p\" with \"o\"",
  description: "Replaces every p with o.",
  run: (value) => String(value).split("p").join("o"),
});
