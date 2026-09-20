'use strict';

const { defineStage } = require('../core/registry');

module.exports = defineStage({
  id: "mod-0028",
  name: "Mask all but last 2",
  description: "Masks all but the last 2 characters.",
  run: (value) => { const s = String(value); const keep = 2; if (s.length <= keep) return s; return '*'.repeat(s.length - keep) + s.slice(-keep); },
});
