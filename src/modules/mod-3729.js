'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3729",
  name: "Replace \"U\" with \"V\"",
  description: "Replaces every U with V.",
  run: (value) => String(value).split("U").join("V"),
});
