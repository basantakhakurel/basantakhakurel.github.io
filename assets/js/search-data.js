// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Papers with me as an author. You can find the latest list in google scholar (link in homepage).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-presentations",
          title: "Presentations",
          description: "Scientific Talks and Posters",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Some projects I have been a part of. More being slowly added ...",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-code",
          title: "Code",
          description: "Data, analysis scripts, and software from my research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Here you can find my short CV. A full version as a pdf is availabe, you can take a look at it by clicking the &#39;pdf&#39; button (opens in a new tab).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-i-recently-moved-to-munich",
          title: 'I recently moved to Munich.',
          description: "",
          section: "News",},{id: "projects-species-delimitation-on-eastern-pinesnakes",
          title: 'Species Delimitation on Eastern Pinesnakes',
          description: "Population structure of Eastern pinesnake complex",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Pinesnakes/";
            },},{id: "projects-empowering-accessible-education-in-nepal",
          title: 'Empowering Accessible Education in Nepal',
          description: "Bridging the educational gap for hearing-impaired children in Nepal.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/accessible_education_2025/";
            },},{id: "projects-character-coding-and-state-space",
          title: 'Character Coding and State Space',
          description: "How unobserved character states bias Bayesian morphological phylogenetics",
          section: "Projects",handler: () => {
              window.location.href = "/projects/character_coding/";
            },},{id: "projects-continuous-characters-in-phylogenetics",
          title: 'Continuous Characters in Phylogenetics',
          description: "Joint estimation of dicynodont phylogeny from continuous and discrete traits",
          section: "Projects",handler: () => {
              window.location.href = "/projects/continuous_characters/";
            },},{id: "projects-covarion-model-for-morphology",
          title: 'Covarion Model for Morphology',
          description: "Modelling characters that change their speed of evolution across the tree",
          section: "Projects",handler: () => {
              window.location.href = "/projects/covarion/";
            },},{id: "projects-mosaic-morphological-evolution",
          title: 'Mosaic Morphological Evolution',
          description: "Testing which model of evolution fits each morphological character",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mosaic_evolution/";
            },},{id: "projects-hidden-cost-of-rate-discretization",
          title: 'Hidden cost of Rate Discretization',
          description: "How the number of rate categories affects phylogenetic inference",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rate_prior/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
