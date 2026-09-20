'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0156",
  name: "Mask all but last 10",
  description: "Masks all but the last 10 characters.",
  run: (value) => { const s = String(value); const keep = 10; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});
