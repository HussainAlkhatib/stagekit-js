'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-3692",
  name: "Replace \"U\" with \"j\"",
  description: "Replaces every U with j.",
  run: (value) => String(value).split("U").join("j"),
});
