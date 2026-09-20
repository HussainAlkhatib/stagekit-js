'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1734",
  name: "Replace \"o\" with \"d\"",
  description: "Replaces every o with d.",
  run: (value) => String(value).split("o").join("d"),
});
