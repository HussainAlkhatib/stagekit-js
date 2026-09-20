'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2067",
  name: "Replace \"t\" with \"G\"",
  description: "Replaces every t with G.",
  run: (value) => String(value).split("t").join("G"),
});
