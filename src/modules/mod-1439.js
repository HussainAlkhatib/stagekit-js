'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1439",
  name: "Replace \"j\" with \"o\"",
  description: "Replaces every j with o.",
  run: (value) => String(value).split("j").join("o"),
});
