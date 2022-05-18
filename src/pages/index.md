---
setup: |
  import TutorialsList from '../cruip-simple/components/tutorials-list.astro';
  import FeaturesBlocks from '../cruip-simple/components/features-blocks.astro';
  import ZeusHeader1 from '../shuffle/zeus/headers/1/index.astro';
  import ZospaceHeader1 from '../shuffle/zospace/headers/1/index.astro';
  import BoldUIHeader1 from '../shuffle/boldUI/headers/1/index.astro';
  import QuickmailHero from '../quickmail/home/index.astro';
data:
  articlesGrid:
    text: "Demos"
    articles:
      -
        text: "Cruip Simple"
        href: "/cruip-simple/"
      -
        text: "Flex"
        href: "/flex/"
      -
        text: "Shuffle pstls"
        href: "/shuffle/pstls/"        
  featuresGrid:
    text: "Explore the solutions"
    subtext: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
    blocks:
      -
        icon: ""
        text: "Headless CMS"
        subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      -
        icon: ""
        text: "Headful CMS"
        subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      -
        icon: ""
        text: "Hello World"
        subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      -
        icon: ""
        text: "Headless CMS"
        subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      -
        icon: ""
        text: "Headless CMS"
        subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
---
<TutorialsList tutorialList = {frontmatter.data}/>
<FeaturesBlocks featuresBlocks = {frontmatter.data}/>
<ZeusHeader1/>
<ZospaceHeader1/>
<BoldUIHeader1/>
<QuickmailHero/>