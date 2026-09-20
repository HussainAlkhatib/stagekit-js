'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4246",
  name: "Replace \"3\" with \"o\"",
  description: "Replaces every 3 with o.",
  run: (value) => String(value).split("3").join("o"),
});
