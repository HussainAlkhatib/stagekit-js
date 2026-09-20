'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2051",
  name: "Replace \"t\" with \"p\"",
  description: "Replaces every t with p.",
  run: (value) => String(value).split("t").join("p"),
});
