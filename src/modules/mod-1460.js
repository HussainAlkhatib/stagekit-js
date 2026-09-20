'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1460",
  name: "Replace \"j\" with \"J\"",
  description: "Replaces every j with J.",
  run: (value) => String(value).split("j").join("J"),
});
