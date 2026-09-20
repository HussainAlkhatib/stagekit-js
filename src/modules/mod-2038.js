'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-2038",
  name: "Replace \"t\" with \"c\"",
  description: "Replaces every t with c.",
  run: (value) => String(value).split("t").join("c"),
});
