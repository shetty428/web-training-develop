import { RewardsResource } from './typings';

// This will fetch our mocked rewards service
export function fetchRewards(): Promise<RewardsResource> {
  return Promise.resolve({
    availablePoints: 450728,
    rewards: [
      {
        name: 'All Inclusive Resort',
        cost: 670499,
        img:
          'https://www.atlantisbahamas.com/media/Things%20To%20Do/Water%20Park/Beaches/Hero/Experiences_Beach.jpg'
      },
      {
        name: 'Nintendo Switch',
        cost: 299999,
        img: 'https://www.nintendo.com/switch/assets/images/switch/buy-now/bundle_color_console.jpg'
      },
      {
        name: 'Google Chromecast',
        cost: 5000,
        img:
          'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6288/6288362_sd.jpg;maxHeight=640;maxWidth=550'
      },
      {
        name: '3 Day Cruise',
        cost: 470499,
        img:
          'https://www.latimes.com/resizer/kcbG_-03pMqd41Ic_EO0J0k3J6w=/1400x0/www.trbimg.com/img-5b7b32c9/turbine/la-1534800576-ptrnk083g2-snap-image'
      }
    ]
  });
}
