'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3697",
  name: "Replace \"U\" with \"o\"",
  description: "Replaces every U with o.",
  run: (value) => String(value).split("U").join("o"),
});
