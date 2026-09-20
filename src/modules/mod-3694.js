'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3694",
  name: "Replace \"U\" with \"l\"",
  description: "Replaces every U with l.",
  run: (value) => String(value).split("U").join("l"),
});
