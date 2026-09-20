'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3708",
  name: "Replace \"U\" with \"z\"",
  description: "Replaces every U with z.",
  run: (value) => String(value).split("U").join("z"),
});
