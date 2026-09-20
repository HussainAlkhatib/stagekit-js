'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-1823",
  name: "Replace \"p\" with \"G\"",
  description: "Replaces every p with G.",
  run: (value) => String(value).split("p").join("G"),
});
