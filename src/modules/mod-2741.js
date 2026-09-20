'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2741",
  name: "Replace \"E\" with \"J\"",
  description: "Replaces every E with J.",
  run: (value) => String(value).split("E").join("J"),
});
