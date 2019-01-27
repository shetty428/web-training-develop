import React, { ReactNode } from 'react';
import { SectionHeader } from '@d3banking/web-sdk/components/SectionHeader';

interface SectionContentProps {
  children: ReactNode;
  className: string;
  title: string;
}

export default ({ children, className, title }: SectionContentProps) => (
  <div className={className}>
    <SectionHeader primary>{title}</SectionHeader>
    <dl className={`p-2 ${className}`}>{children}</dl>
  </div>
);
