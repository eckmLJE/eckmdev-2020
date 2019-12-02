import ctiaFighting from '../images/ctia-fighting.png'
import accessibleAccordion from '../images/a11y-acc-silver.png'
import cardRow from '../images/card-row.png'
import tileGallery from '../images/tile-gallery.png'
import horizontalScroll from '../images/horizontal-scroll-2.png'

export default [
  {
    title: 'CTIA | Fighting Robocalls',
    description: `Static site built in Gatsby with advanced CSS and SVG animations.`,
    highlights: [
      'Gatsby',
      'React',
      'Styled Components',
      'SVG',
      'Accessibility',
    ],
    link: 'https://fightingrobocalls.ctia.org/',
    image: ctiaFighting,
  },
  {
    title: 'Horizontal Scroll Effect',
    description:
      'Blog post written with Director of UX on the design and implementation of a horizontal scroll effect as carousel alternative.',
    highlights: ['React', 'Styled Components', 'CSS Animations'],
    link: 'https://sudo.isl.co/translate-vertical-horizontal/',
    image: horizontalScroll,
  },
  {
    title: 'Card Row',
    description: 'Hand-coded slider component utilizing native scroll snap.',
    highlights: ['React', 'Styled Components', 'JavaScript', 'CSS Animations'],
    link:
      'https://eckm-storybook.netlify.com/?path=/story/interfaces--card-row',
    image: cardRow,
  },
  {
    title: 'Tile Gallery',
    description:
      'Image-focused component accommodating varying numbers of tiles (use slider knob in storybook)',
    highlights: ['React', 'Styled Components', 'JavaScript', 'CSS Animations'],
    link:
      'https://eckm-storybook.netlify.com/?path=/story/interfaces--tile-gallery',
    image: tileGallery,
  },
  {
    title: 'Accessible Accordion',
    description:
      'Keyboard and screen reader accessible accordion with smooth expand and collapse.',
    highlights: ['React', 'Styled Components', 'JavaScript', 'CSS Animations'],
    link:
      'https://eckm-storybook.netlify.com/?path=/story/interfaces--accessible-accordion',
    image: accessibleAccordion,
  },
  // {
  //   title: 'Language Line Length Comparison',
  //   description:
  //     'Compare lengths in pixels of various phrases across multiple languages.',
  //   highlights: ['JavaScript', 'CSS'],
  //   link: 'https://codesandbox.io/s/language-line-length-comparison-879t3',
  //   image: '',
  // },
]
