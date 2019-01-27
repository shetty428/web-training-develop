import React from 'react';
import styled from '@d3banking/web-sdk/styles/emotion';
import { ThemeState } from '@d3banking/web-sdk/typings/state';
import { formatNumber } from '@d3banking/web-sdk/util/formatters';
import { H1 } from '@d3banking/web-sdk/components/Text';

interface RewardPointsProps {
  points: number;
}

const RewardPoints = styled('div')(({ theme }: { theme: ThemeState }) => ({
  // Colors
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 5,
  border: `1px solid ${theme.palette.secondary.dark}`,

  // Layout
  display: 'flex',
  justifyContent: 'center',
  padding: 20
}));

export default ({ points }: RewardPointsProps) => (
  <RewardPoints className="reward-points">
    <H1 className="available-points" secondary>
      {formatNumber(points, { decimalPlaces: 0 })} Pts Available
    </H1>
  </RewardPoints>
);
