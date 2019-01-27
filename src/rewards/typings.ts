export interface Reward {
  name: string;
  cost: number;
  img: string;
}

export interface RewardsResource {
  availablePoints: number;
  rewards: Reward[];
}
