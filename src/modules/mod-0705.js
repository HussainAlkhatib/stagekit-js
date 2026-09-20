'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0705",
  name: "Replace \"c\" with \"t\"",
  description: "Replaces every c with t.",
  run: (value) => String(value).split("c").join("t"),
});
