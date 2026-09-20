'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3572",
  name: "Replace \"S\" with \"l\"",
  description: "Replaces every S with l.",
  run: (value) => String(value).split("S").join("l"),
});
