'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1867",
  name: "Replace \"q\" with \"o\"",
  description: "Replaces every q with o.",
  run: (value) => String(value).split("q").join("o"),
});
