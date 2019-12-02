import CtiaFighting from '../components/images/ctia-fighting'
import AccessibleAccordion from '../components/images/accessible-accordion'
import CardRow from '../components/images/card-row'
import TileGallery from '../components/images/tile-gallery'
import HorizontalScroll from '../components/images/horizontal-scroll'

export default [
  {
    title: 'CTIA | Fighting Robocalls',
    description: `Static site built in Gatsby with advanced CSS and SVG animations. Graceful degredation with JS disabled.`,
    highlights: ['Gatsby', 'React', 'SVG', 'Accessibility'],
    link: 'https://fightingrobocalls.ctia.org/',
    image: CtiaFighting,
  },
  {
    title: 'Horizontal Scroll Effect',
    description:
      'Blog post written with Director of UX on the design and implementation of a horizontal scroll effect as carousel alternative.',
    highlights: ['React', 'React Hooks', 'CSS Animations', 'Styled Components'],
    link: 'https://sudo.isl.co/translate-vertical-horizontal/',
    image: HorizontalScroll,
  },
  {
    title: 'Card Row',
    description: 'Hand-coded slider component utilizing native scroll snap.',
    highlights: ['React', 'JavaScript', 'CSS Animations'],
    link:
      'https://eckm-storybook.netlify.com/?path=/story/interfaces--card-row',
    image: CardRow,
  },
  {
    title: 'Tile Gallery',
    description:
      'Image-focused component accommodating varying numbers of tiles (use slider knob in storybook)',
    highlights: ['React', 'JavaScript', 'CSS Animations'],
    link:
      'https://eckm-storybook.netlify.com/?path=/story/interfaces--tile-gallery',
    image: TileGallery,
  },
  {
    title: 'Accessible Accordion',
    description:
      'Keyboard and screen reader accessible accordion with smooth expand and collapse.',
    highlights: ['React', 'JavaScript', 'Accessibility', 'CSS Animations'],
    link:
      'https://eckm-storybook.netlify.com/?path=/story/interfaces--accessible-accordion',
    image: AccessibleAccordion,
  },
]
