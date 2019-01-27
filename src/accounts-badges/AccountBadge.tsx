import React from 'react';
import { Badge } from '@d3banking/web-sdk/components/Badge';

interface AccountBadgeProps {
  text: string | null;
}
export default ({ text }: AccountBadgeProps) => <Badge secondary>{text}</Badge>;
