---
layout: "@shuffle-pstls/html.astro"
setup: |
  import Header from "@shuffle-pstls/headers/1/index.astro"
  import Blog1 from "@shuffle-metis/blog/1/index.astro"
  import Blog3 from "@shuffle-pstls/blog/3/index.astro"
  import Features3 from "@shuffle-pstls/features/3/index.astro"
  import Features7 from "@shuffle-pstls/features/7/index.astro"
  import Features8 from "@shuffle-pstls/features/8/index.astro"
  import Features9 from "@shuffle-pstls/features/9/index.astro"
  import Features11 from "@shuffle-pstls/features/11/index.astro"
  import HowItWorks1 from "@shuffle-pstls/how-it-works/1/index.astro"
  import HowItWorks2 from "@shuffle-pstls/how-it-works/2/index.astro"
  import HowItWorks7 from "@shuffle-pstls/how-it-works/7/index.astro"
heroText:
  textFirst: Created for
  textSecond: ambitious
  textThird: businesses.
  subText: Pstls. Kit uses attractive colors and modern typography to make you look good, no matter what business you’re in.
  buttonText: Detail
---

<Header heroText={frontmatter.heroText} />
<Blog1 />
<Blog3 />
<HowItWorks1 />
<HowItWorks2 />
<HowItWorks7 />
<Features3 />
<Features7 />
<Features8 />
<Features9 />
<Features11 />

