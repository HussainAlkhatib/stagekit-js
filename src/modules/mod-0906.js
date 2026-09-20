'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0906",
  name: "Replace \"d\" with \"z\"",
  description: "Replaces every d with z.",
  run: (value) => String(value).split("d").join("z"),
});
