'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2144",
  name: "Replace \"u\" with \"W\"",
  description: "Replaces every u with W.",
  run: (value) => String(value).split("u").join("W"),
});
