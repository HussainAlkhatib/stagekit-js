'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2069",
  name: "Replace \"t\" with \"I\"",
  description: "Replaces every t with I.",
  run: (value) => String(value).split("t").join("I"),
});
