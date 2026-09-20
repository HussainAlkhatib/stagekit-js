'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-4023",
  name: "Replace \"Z\" with \"J\"",
  description: "Replaces every Z with J.",
  run: (value) => String(value).split("Z").join("J"),
});
