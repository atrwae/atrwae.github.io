const en = {
    close: 'Close',
    header:
    {
        games: 'Games',
        aboutMe: 'About me',
        porting: 'Porting',
        cv: 'CV',
        contact: 'Contact'
    },
    about:
    {
        hello: 'Hi!',
        p1: `I'm <strong>Artur Wiącek</strong>, a Unity Developer with over 3 years of commercial experience.
            <br/> I love everything games-related, I participate in lots of industry events
            and aside from creating video games I've also created my own card game and even my own wooden game console!`,
        p2: `Commercially I've worked solely on {{porting}}, but I also have lots of {{my own projects}} and other
            things in {{my CV}}.`,
        p3: `Right now I'm working on my own game {{Astrolings}} and I'm looking for new projects. You can contact me {{here}}.`
    },
    gameProjects:
    {
        title: 'Games',
        p1: 'A collection of games I made myself or helped with significantly, plus two articles I wrote.',
        p2: 'More of my projects can be found in the {{porting tab}}'
    },
    otherProjects:
    {
        title: 'Porting',
        p1: 'Ports to various consoles I worked on, most of them solo.'
    },
    resume:
    {
        p1: `I'm a Unity Developer from Warsaw, I'm 23 years old and have 3 years of commercial experience in game porting.
  <br />I've tried a few languages like C++, Python and JavaScript but I feel most at home in C#.
  <br />
  <br />I enjoy managing teams when I get the chance and having an impact on the final result of our shared work. I believe games are very complex but engaging creations and I hope to spend my whole life making them.
  <br />
  <br />At the moment I'm working on my own game Astrolings and looking for a job.
  <br />
  <br />Outside of programming I'm passionate about video games and climbing. I love sports, cycling and travelling.`,
        downloadButton: 'Download as PDF',
        skills:
        {
            title: 'Skills',
            miscTitle: 'Miscellaneous',
            misc: `<li>good knowledge of Unity, C# and the Git version control system</li>
        <li>good knowledge of Addressables, Rewired, Old & New Input System,<br/>Cinemachine, Frame Debugger, Profiler</li>
        <li>good knowledge of many Unity SDKs</li>
        <li>knowledge and application of Clean Code, DRY, KISS, YAGNI etc. practices</li>
        <li>knowledge of design patterns such as Singleton, Object Pooling etc.</li>
        <li>basic knowledge of Node Canvas, Odin Inspector, Wwise</li>
        <li>interest in and broad knowledge of the games market</li>`,
            unityTitle: 'Unity SDK - Platforms',
            unity: `<li>Nintendo Switch</li>
        <li>PS4 & PS5</li>
        <li>GDK (Xbox One & Xbox Series X/S)</li>
        <li>Microsoft Store</li>
        <li>Steam</li>
        <li>Steam Deck</li>`
        },
        experience: 'Experience',
        naptime:
        {
            title: '[Porting Programmer]',
            summary: `<li>adding mechanics and UI systems to existing games</li>
          <li>ported 6 mobile games in Unity (over <b><u>340 million downloads</u></b> combined)</li>
          <li>porting to Nintendo, PS4, PS5, Xbox One, Microsoft Store, Steam, Steam Deck</li>
          <li>managing a team of 2-3 programmers on one of the projects</li>`
        },
        noGravity:
        {
            title: '[Porting Programmer]',
            summary: `<li>by myself porting Unity games to Nintendo: "Master Spy", "Cyjin: The Cyborg Ninja"</li>
          <li>helping with porting "Flashout 3" to PlayStation and Xbox</li>
          <li>reconstruction in Unity of a project originally built in JavaScript</li>`
        },
        hellHotel:
        {
            projectName: 'Project "Hell Hotel" ',
            title: '[Co-management and programming]',
            summary: `<li>student project</li>
          <li>6-person team</li>`
        },
        cyborg:
        {
            projectName: 'Project "Cyborg" ',
            title: '[Solo production and publishing]',
            summary: `<li>creating my own game on Google Play (2D)</li>`
        },
        languages:
        {
            title: 'Languages',
            eng: 'English',
            engDesc: `I speak fluently, I wrote my extended high school exam at B2 level scoring 94%, 
            I'm probably somewhere around C1/C2`,
            fr: 'French',
            frDesc: `School, courses and flashcards - I'm probably somewhere around B1 level`,
            pl: 'Polish',
            plDesc: 'My native language'
        },
        misc:
        {
            title: 'Besides that...',
            videoGames: '❤️ Video Games',
            videoGamesDesc: `I've spent most of my life playing games and watching gameplays. I'm fairly 
      well versed in the market and have had the pleasure of talking to many people who found success
      in the industry 😊<br />I'm a fan of among others Rainbow Six Siege, Thaumaturge, Red Dead Redemption 2, The Long Dark,
      Stardew Valley, The Witcher 3, Beat Cop, This Is the Police...`,
            sport: '🧡 Sport',
            sportDesc: `Most of my hobbies are active - I spend a lot of time running, climbing and cycling. 
      Basketball is great too 😊`,
            mountains: '💛 Mountains',
            mountainsDesc: `I recently discovered hiking and fell in love with the polish Tatra Mountains. In 2024 I climbed 
      Rysy for the first time (Poland's highest peak).`,
            travel: '💚 Travel',
            travelDesc: `I've been lucky enough to visit most major cities in Poland and travel abroad a few times 
      including to Bulgaria, Spain, the United Kingdom and Germany. Some of the best 
      adventures of my life 😊`,
        }
    },
    contact:
    {
        title: 'Let\'s Talk',
        p1: `I'm looking for new projects!<br/>Feel free to write about any 
        projects I can help with or save :)`
    },
    footer:
    {
        p1: '<a href="https://github.com/schouffy/gamedev-portfolio" target="blank">Template</a> by schouffy',
        p2: 'Write to me at <a href="mailto:artur.midiaibim@gmail.com">artur.midiaibim@gmail.com</a> or {{here}}',

    },
    gameProjectsData:
    {
        astrolingsDesc: `A multiplayer game for PC and Android that I've been working on solo for the last 3 months 
        (as of December 2024). It's intended to be similar to 'Super Auto Pets' but with greater emphasis
        on deck building and customization of your animals as well as seasonal events.<br />
        <br />As work progresses, more information, links and screenshots will appear here.`,
        viewCone: "Article 'Unity View Cone Tutorial'",
        viewConeDesc: `<a href="https://itch.io/blog/521186/unity-view-cone-tutorial" target="blank">Link to 
        the article</a>`,
        superliminalDesc: `<a href="https://itch.io/blog/547361/unity-superliminal-tutorial" target="blank">Link 
        to the article</a>`,
        hellHotelDesc: `A student project at the Warsaw University of Technology in which besides programming I 
        took the role of the actual lead of a 6-person team.<br /><br />The game is available for free download 
        <a href="https://rickimanda.itch.io/hell-hotel" target="blank">here</a>.`,
        cyborgDesc: `One of my first projects in Unity (Android).<br /><br />The game was finished and released 
        by me on Google Play gathering around a thousand downloads. Unfortunately Google likes to irreversibly 
        delete developer accounts so since sometime around March 2024 it can no longer be downloaded.`
    },
    otherProjectsData:
    {
        flashoutDesc: `<div class="paragraph">
        <strong>Flashout 3</strong> is a game I helped port from PC to PS4 and Xbox One.
        <br/>
        <br/>
        <br/><a href="https://www.xbox.com/pl-PL/games/store/flashout-3/9n5hq9d2kfwn" target="blank">Flashout 3 on Xbox Store</a>.
        <br/><a href="https://store.playstation.com/pl-pl/product/EP1133-CUSA38153_00-0834589849184137" target="blank">Flashout 3 on PlayStation Store</a>.
        </div>`,
        cyjinDesc: `<div class="paragraph">
        <strong>Cyjin: The Cyborg Ninja</strong> is a game I ported from PC to Nintendo Switch.
        <br/>
        <br/>
        <br/><a href="https://www.nintendo.com/us/store/products/cyjin-the-cyborg-ninja-switch/?srsltid=AfmBOorH4PedVTjZHv7C-PQMuBjV1EC1OUgdjwyNQBUyk3fXGyt-wr3G" target="blank">Cyjin on Nintendo eShop</a>.
        </div>`,
        uboatDesc: `<div class="paragraph">
        <strong>Uboat Attack</strong> is my largest solo port yet. I single-handedly ported this game from Android/iOS to Nintendo Switch, PS4, PS5, Steam and Steam Deck. We completely overhauled the game's UI and economy, and many mechanics were also thoroughly modified.
        <br/>
        <br/>
        <br/><a href="https://www.nintendo.com/us/store/products/uboat-attack-switch/?srsltid=AfmBOorCLqSgVgE9vde4gwEdTx-j7qGkMY5nLDMHgTK8CgO3Kps7JfRY" target="blank">Uboat Attack on Nintendo eShop</a>.
        </div>`,
        masterSpyDesc: `<div class="paragraph">
        <strong>Master Spy</strong> is a game I ported from PC to Nintendo Switch. The original project was written in JavaScript with no game engine, so I ported it by rewriting the entire game in Unity.
        <br/>
        <br/>
        <br/><a href="https://www.nintendo.com/us/store/products/master-spy-switch/" target="blank">Master Spy on Nintendo eShop</a>.
        </div>`,
        notnotDesc: `<div class="paragraph">
        <strong>Not Not - A Brain Buster</strong> is a game which Microsoft Store port I finished up. I fixed many bugs, polished oddly behaving mechanics and prepared the game for release.
        <br/>
        <br/>
        <br/><a href="https://www.xbox.com/pl-PL/games/store/not-not-a-brain-buster/9p5v8ks3b9sw" target="blank">Not Not on Microsoft Store</a>.
        </div>`,
        woodturningDesc: `<div class="paragraph">
        <strong>Woodturning 3D</strong> is a game I ported from Android/iOS to Nintendo Switch.
        <br/>
        <br/>
        <br/><a href="https://www.nintendo.com/us/store/products/woodturning-3d-switch/?srsltid=AfmBOoq5siDl1l4efAdQSTXuleWsUNylId53dLhBioVFTsU39gNRN9wM" target="blank">Woodturning on Nintendo eShop</a>.
        </div>`,
        zombieRaftDesc: `<div class="paragraph">
        <strong>Zombie Raft</strong> is a game I ported from Android/iOS to Nintendo Switch. Besides porting, I also heavily modified this project, including adding a limited resource-gathering time mechanic along with new UI, changing the in-game progression system and the zombie behavior and attacks.
        <br/>
        <br/>
        <br/><a href="https://www.nintendo.com/us/store/products/zombie-raft-switch/" target="blank">Zombie Raft on Nintendo eShop</a>.
        </div>`
    }
}

export default en