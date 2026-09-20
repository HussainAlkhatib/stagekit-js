'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0690",
  name: "Replace \"c\" with \"o\"",
  description: "Replaces every c with o.",
  run: (value) => String(value).split("c").join("o"),
});
