import CtiaFighting from '../components/images/ctia-fighting'
import AccessibleAccordion from '../components/images/accessible-accordion'
import CardRow from '../components/images/card-row'
import TileGallery from '../components/images/tile-gallery'
import HorizontalScroll from '../components/images/horizontal-scroll'
import TSCalc from '../components/images/ts-calc'
import EckmSS from '../components/images/eckm-ss'
import LLLObj from '../components/images/lll-obj'
import TextHighlights from '../components/images/text-highlights'

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
    highlights: ['React', 'React Hooks', 'CSS Animations'],
    link:
      'https://medium.com/@lucas.eckman/ditch-the-carousel-creating-a-horizontal-scroll-effect-7a36c0f1c456',
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
    title: 'TypeScript Calculator',
    description:
      'Calculator written in TypeScript, adapated from tutorial in vanilla JS.',
    highlights: ['TypeScript', 'JavaScript'],
    link: 'https://codesandbox.io/s/ts-calc-izx7n',
    image: TSCalc,
  },
  {
    title: 'Language Line Length Comparison',
    description:
      'Given a JSON collection of phrases translated into various languages, compare rendered lengths in pixels.',
    highlights: ['JavaScript', 'JSON'],
    link: 'https://codesandbox.io/s/language-line-length-comparison-rqxdk',
    image: LLLObj,
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
  {
    title: 'Saving Text Highlights',
    description:
      'Blog post describing an approach to recreate the text highlighting feature found on Medium and Genius.',
    highlights: ['JavaScript', 'React', 'Redux'],
    link: 'https://medium.com/@lucas.eckman/easy-as-1-2-3-cdca597f35a6',
    image: TextHighlights,
  },
  {
    title: 'eckm.dev',
    description: 'Personal site built with Gatsby and deployed to Netlify. (Links to GitHub)',
    highlights: ['Gatsby', 'React', 'Styled Components'],
    link: 'https://github.com/eckmLJE/eckmdev-2020',
    image: EckmSS,
  },
]
