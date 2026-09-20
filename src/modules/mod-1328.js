'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1328",
  name: "Replace \"h\" with \"z\"",
  description: "Replaces every h with z.",
  run: (value) => String(value).split("h").join("z"),
});
