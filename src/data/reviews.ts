export interface Review {
  id: string;
  author: string;
  initials: string;
  badge?: string;
  isLocalGuide?: boolean;
  time: string;
  rating: number;
  comment: string;
  priceAssessment?: string;
  price?: string;
  services?: string;
}

export const GOOGLE_REVIEWS_SUMMARY = {
  rating: 4.8,
  totalReviews: 9,
  writeReviewUrl: 'https://maps.app.goo.gl/ez95mPFgytMtX7Va8',
  readReviewsUrl: 'https://maps.app.goo.gl/ez95mPFgytMtX7Va8',
};

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: 'richard-ball',
    author: 'Richard Ball',
    initials: 'RB',
    badge: 'Local Guide · 25 reviews · 5 photos',
    isLocalGuide: true,
    time: 'a year ago',
    rating: 5,
    comment:
      "Dale has been working on our showroom and has done an incredible job with everything! We highly recommend Dale and Buck's Electric!!",
  },
  {
    id: 'twiggit-ann',
    author: 'TwiggitAnn',
    initials: 'TA',
    badge: '2 reviews',
    isLocalGuide: false,
    time: '7 years ago',
    rating: 5,
    comment:
      "I have had Buck's Electric out to my home several time, each time is better than the last. Dale always takes the time to walk through each step that they will be taking as well as how is it will affect the rest of the house. They will be back out at my house next week rewiring my entire basement.",
  },
  {
    id: 'kelley-meyer',
    author: 'Kelley Meyer',
    initials: 'KM',
    badge: '13 reviews',
    isLocalGuide: false,
    time: '6 years ago',
    rating: 5,
    comment:
      'Dana came out today to install new outlets. He was professional and very thorough. We highly recommend Buck\'s Electric and will call on this company again.',
  },
  {
    id: 'george-waxler',
    author: 'George Waxler',
    initials: 'GW',
    badge: 'Local Guide · 8 reviews',
    isLocalGuide: true,
    time: '9 months ago',
    rating: 5,
    comment: 'Very competent, friendly, reasonable people. Recommend them 100%.',
    priceAssessment: 'Reasonable price',
    price: '$1,400–1,600',
    services: 'General construction',
  },
  {
    id: 'justin-jones-1',
    author: 'Justin Jones',
    initials: 'JJ',
    badge: '1 review',
    isLocalGuide: false,
    time: '11 months ago',
    rating: 5,
    comment: 'Always great service from Dale!',
  },
  {
    id: 'james-munger',
    author: 'James Munger',
    initials: 'JM',
    badge: 'Local Guide · 52 reviews · 16 photos',
    isLocalGuide: true,
    time: '7 years ago',
    rating: 5,
    comment: 'Great work',
  },
  {
    id: 'justin-jones-2',
    author: 'Justin Jones',
    initials: 'JJ',
    badge: 'Local Guide · 35 reviews · 20 photos',
    isLocalGuide: true,
    time: '3 years ago',
    rating: 5,
    comment: '5-star rating on Google Maps for prompt, dependable electrical work.',
  },
  {
    id: 'lee-magelky',
    author: 'Lee Magelky',
    initials: 'LM',
    badge: '1 review',
    isLocalGuide: false,
    time: '4 years ago',
    rating: 5,
    comment: '5-star rating on Google Maps for trustworthy electrical contractor service.',
  },
  {
    id: 'rob-bradford',
    author: 'Rob Bradford',
    initials: 'RB',
    badge: 'Local Guide · 21 reviews · 14 photos',
    isLocalGuide: true,
    time: '7 years ago',
    rating: 5,
    comment: '5-star rating on Google Maps for quality electrical workmanship.',
  },
];

