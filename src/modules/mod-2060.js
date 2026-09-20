'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2060",
  name: "Replace \"t\" with \"z\"",
  description: "Replaces every t with z.",
  run: (value) => String(value).split("t").join("z"),
});
