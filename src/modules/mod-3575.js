'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3575",
  name: "Replace \"S\" with \"o\"",
  description: "Replaces every S with o.",
  run: (value) => String(value).split("S").join("o"),
});
