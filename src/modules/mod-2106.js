'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2106",
  name: "Replace \"u\" with \"j\"",
  description: "Replaces every u with j.",
  run: (value) => String(value).split("u").join("j"),
});
