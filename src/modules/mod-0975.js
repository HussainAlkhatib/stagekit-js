'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0975",
  name: "Replace \"d\" with \"W\"",
  description: "Replaces every d with W.",
  run: (value) => String(value).split("d").join("W"),
});
