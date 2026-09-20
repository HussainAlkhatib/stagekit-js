'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2131",
  name: "Replace \"u\" with \"J\"",
  description: "Replaces every u with J.",
  run: (value) => String(value).split("u").join("J"),
});
