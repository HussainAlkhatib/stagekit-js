'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0097",
  name: "Slug with \"*\"",
  description: "Builds a lowercase slug joined by \"*\".",
  run: (value) => String(value).toLowerCase().split(/[^a-z0-9]+/).filter(Boolean).join("*"),
});
