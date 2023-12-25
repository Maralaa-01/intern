
export const Categories = [
  {
    index: 1,
    label: 'Computer & Laptop',
    value: 'comandlap' as const,
    subCat: [
      'All',
      'Apple', 
      'Microsoft', 
      'Dell', 
      'Symphony', 
      'Sony', 
      'LG', 
      'One Plus', 
      'Google', 
      'Samsung', 
      'HP', 
      'Xiaomi', 
      'Panasonic', 
      'Intel',
    ],
    url: '',
  }, 
  {
    index: 2,
    label: 'Computer Accessories',
    value: 'comandacc' as const,
    subCat: [
      'All',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
  }, 
  {
    index: 3,
    label: 'SmartPhone',
    value: 'smartphone' as const,
    subCat: [
      'All',
      'iPhone',
      'Samsung',
      'Realme',
      'Xiaomi',
      'Oppo',
      'Vivo',
      'OnePlus',
      'Huawei',
      'Infinix',
      'Tecno',
    ]
  }, 
  {
    index: 4,
    label: 'Headphone',
    value: 'headphone' as const,
    subCat: [
      'All',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
  }, 
  {
    index: 5,
    label: 'Mobile Accessories',
    value: 'mobacc' as const,
    subCat: [
      'All',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
  }, 
  {
    index: 6,
    label: 'Gaming Console',
    value: 'console' as const,
    subCat: [
      'All',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
  }, 
  {
    index: 7,
    label: 'Camera & Photo',
    value: 'camera' as const,
    subCat: [
      'All',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
  }, 
  {
    index: 8,
    label: 'TV & Homes Appliances',
    value: 'tv' as const,
    subCat: [
      'All',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
  }, 
  {
    index: 9,
    label: 'Watchs & Accessories',
    value: 'watch' as const,
    subCat: [
      'All',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
  }, 
  {
    index: 10,
    label: 'GPS & Navigation',
    value: 'gps' as const,
    subCat: [
      'All',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
  }, 
  {
    index: 11,
    label: 'Wearable Technology',
    value: 'wearable' as const,
    subCat: [
      'All',
      '',
      '',
      '',
      '',
      '',
      '',
    ],
  }, 
]

export const PopularBrands = [
  'iPhone',
  'Samsung',
  'Realme',
  'Xiaomi',
  'Oppo',
  'Vivo',
  'OnePlus',
  'Huawei',
  'Infinix',
  'Tecno'
]

export const PopularTag = [
  'Game',
  'iPhone',
  'TV',
  'Asus Laptops',
  'Macbook',
  'SSD',
  'Graphic Card',
  'Power Bank',
  'Smart TV',
  'Speaker',
  'Tablet',
  'Microwave',
  'Samsung'
]

const badge = [
  {
    label: 'hot',
    style: 'bg-danger-500 text-grey-0 border-none uppercase padding5px10px rounded-sm'
  },
  {
    label: 'best-deals',
    style: 'bg-secondary-500 text-grey-0 border-none uppercase padding5px10px rounded-sm'
  },
  {
    label: 'off',
    style: 'bg-warning-400 text-grey-900 border-none uppercase padding5px10px rounded-sm'
  },
  {
    label: 'sale',
    style: 'bg-success-500 text-grey-0 border-none uppercase padding5px10px rounded-sm'
  }
]