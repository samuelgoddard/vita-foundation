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
    active: '/resources',
    href: '/blog',
  },{
    label: 'Educational Resources',
    active: '/resources',
    href: '/educational-resources',
  },{
    label: 'Newsletter',
    active: '/resources',
    href: '/resources#newsletter',
  },{
    label: 'Events',
    active: '/resources',
    href: '/resources#events',
  },{
    label: 'Signposting',
    active: '/resources',
    href: '/resources#signposting',
  }]
}]
