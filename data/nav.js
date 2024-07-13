export const nav = [{
  label: 'About Us',
  href: '/about',
  children: true
},{
  label: 'Vita Training',
  href: '/training',
  children: true
},{
  label: 'Vita Network',
  href: '/network',
  children: false
},{
  label: 'Resources',
  href: '/resources',
  children: [{
    label: 'Blog',
    href: '/resources/blog',
  },{
    label: 'Educational Resources',
    href: '/resources/educational',
  },{
    label: 'Newsletter',
    href: '/resources#newsletter',
  },{
    label: 'Events',
    href: '/resources#events',
  },{
    label: 'Signposting',
    href: '/resources#signposting',
  }]
}]
