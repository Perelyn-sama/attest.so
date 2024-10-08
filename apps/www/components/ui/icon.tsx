'use client'

import type { LucideIcon } from 'lucide-react';
import { TerminalIcon } from 'lucide-react';
import React from 'react';

export function create({
  icon: Icon,
}: {
  icon?: LucideIcon;
}): React.ReactElement {
  return (
    <div className="rounded-md border bg-gradient-to-b from-fd-secondary p-1 shadow-sm">
      {Icon ? <Icon /> : <TerminalIcon />}
    </div>
  );
}