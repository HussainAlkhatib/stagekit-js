'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3730",
  name: "Replace \"U\" with \"W\"",
  description: "Replaces every U with W.",
  run: (value) => String(value).split("U").join("W"),
});
