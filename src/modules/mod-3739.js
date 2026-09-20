'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3739",
  name: "Replace \"U\" with \"5\"",
  description: "Replaces every U with 5.",
  run: (value) => String(value).split("U").join("5"),
});
