const pl = {
    close: 'Zamknij',
    header:
    {
        games: 'Gry',
        aboutMe: 'O mnie',
        porting: 'Portowanie',
        cv: 'CV',
        contact: 'Kontakt'
    },
    about:
    {
        hello: 'Cześć!',
        p1: `Nazywam się <strong>Artur Wiącek</strong>, jestem Unity Developerem z 4-letnim komercyjnym
            doświadczeniem.<br/> Kocham wszystko co związane z grami, biorę udział w masie eventów,
            a oprócz wielu gier wideo zrobiłem swoją karciankę i nawet własną konsolę do gier.`,
        p2: `Komercyjnie pracowałem wyłącznie przy {{portowaniu}}, ale mam też sporo {{własnych projektów}} i innych
            rzeczy w {{moim cv}}.`,
        p3: `Obecnie pracuję nad swoją grą {{Astrolings}} i portuję gry. Możesz się ze mną skontaktować {{tutaj}}.`
    },
    gameProjects: 
    {
        title: 'Gry',
        p1: 'Zbiór gier które zrobiłem samemu albo w dużej części pomogłem plus dwa artykuły które napisałem.',
        p2: 'Więcej moich projektów znajduje się w {{zakładce portowanie}}'
    },
    otherProjects: 
    {
        title: 'Portowanie',
        p1: 'Porty na różne konsole przy których pracowałem, większość solo.'
    },
    resume: 
    {
        p1: `Jestem Unity Developerem z Warszawy, mam 23 lata i 3 lata komercyjnego doświadczenia przy portowaniu gier.
      <br />Próbowałem paru języków jak C++, Python i JavaScript ale najlepiej odnajduję się w C#.
      <br />
      <br />Lubię zarządzać zespołami jak mam okazję i wywierać wpływ na efekt końcowy wspólnej pracy. Uważam że gry są bardzo skomplikowanymi ale angażującymi tworami i mam nadzieję móc spędzić przy ich produkcji całe życie.
      <br />
      <br />Na chwilę obecną pracuję przy własnej grze Astrolings i szukam pracy.
      <br />
      <br />Poza programowaniem pasjonuję się grami wideo oraz wspinaczką. Kocham sport, jazdę na rowerze i podróże.`,
        downloadButton: 'Pobierz jako PDF',
      skills: 
      {
          title: 'Umiejętności',
          miscTitle: 'Różne',
          misc: `<li>dobra znajomość Unity, C# i systemu kontroli wersji Git</li>
            <li>dobra znajomość Addressables, Rewired, Old & New Input System,<br/>Cinemachine, Frame Debugger-a, Profiler-a</li>
            <li>dobra znajomość wielu SDK Unity</li>
            <li>znajomość i stosowanie się do praktyk Clean Code, DRY, KISS, YAGNI etc.</li>
            <li>znajomość wzorców projektowych takich jak Singleton, Object Pooling etc.</li>
            <li>podstawowa znajomość Node Canvas, Odin Inspector, Wwise</li>
            <li>zainteresowanie i rozległa wiedza na temat rynku gier</li>`,
          unityTitle: 'SDK Unity - Platformy',
          unity: `<li>Nintendo Switch</li>
            <li>PS4 & PS5</li>
            <li>GDK (Xbox One & Xbox Series X/S)</li>
            <li>Microsoft Store</li>
            <li>Steam</li>
            <li>Steam Deck</li>`
      },
      experience: 'Doświadczenie',
      naptime: 
      {
          title: '[Programista Portingu]',
          summary: `<li>dodawanie mechanik i systemów UI do istniejących gier</li>
              <li>zportowanie 6 gier mobilnych w Unity (łącznie ponad <b><u>340 milionów pobrań</u></b>)</li>
              <li>portowanie na Nintendo, PS4, PS5, Xbox One, Microsoft Store, Steam, Steam Deck</li>
              <li>zarządzanie zespołem 2-3 programistów przy jednym z projektów</li>`
      },
      noGravity: 
      {
          title: '[Programista Portingu]',
          summary: `<li>samodzielne portowanie gier w Unity na Nintendo: "Master Spy", "Cyjin: The Cyborg Ninja"</li>
              <li>pomoc przy portowaniu gry "Flashout 3" na Playstation i Xboxa</li>
              <li>rekonstrukcja w Unity projektu stworzonego w JavaScript</li>`
      },
      hellHotel: 
      {
          projectName: 'Projekt "Hell Hotel" ',
          title: '[Co-management i programowanie]',
          summary: `<li>projekt studencki</li>
              <li>6-osobowy zespół</li>`
      },
      cyborg: 
      {
          projectName: 'Projekt "Cyborg" ',
          title: '[Solo produkcja i opublikowanie]',
          summary: `<li>stworzenie własnej gry na Google Play (2D)</li>`
      },
      languages:
      {
          title: 'Języki',
          eng: 'Angielski',
          engDesc: `Mówię płynnie, napisałem maturę rozszerzoną na poziomie B2 na 94%, 
                prawdopodobnie jestem gdzieś na C1/C2`,
          fr: 'Francuski',
          frDesc: 'Szkoła, kursy i fiszki - prawdopodobnie jestem gdzieś na poziomie B1',
          pl: 'Polski',
          plDesc: 'Mój język ojczysty'
      },
      misc: 
      {
          title: 'Oprócz tego...',
          videoGames: '❤️ Gry wideo',
          videoGamesDesc: `Spędziłem większość życia grając w gry i oglądając gameplaye. Jestem nieźle 
          zorientowany w tym rynku i miałem przyjemność rozmawiać z wieloma osobami które odniosły sukces
          w branży 😊<br />Jestem fanem m.in. Rainbow Six Siege, Thaumaturge, Red Dead Redemption 2, The Long Dark,
          Stardew Valley, Wiedźmina 3, Beat Copa, This Is the Police...`,
          sport: '🧡 Sport',
          sportDesc: `Większość moich pasji jest aktywna - sporo czasu spędzam biegając, wspinając się i na rowerze. 
          Koszykówka też jest super 😊`,
          mountains: '💛 Góry',
          mountainsDesc: `Niedawno odkryłem chodzenie po górach i zakochałem się w Tatrach. W 2024 pierwszy raz 
          zdobyłem Rysy.`,
          travel: '💚 Podróże',
          travelDesc: `Miałem na tyle farta że mogłem zwiedzić większość dużych miast w Polsce i parę razy 
          wybrać się za granicę m.in. do Bułgarii, Hiszpanii, Wielkiej Brytanii i Niemiec. Jedne z fajniejszych
          przygód w moim życiu 😊`,
      }
    },
    contact: 
    {
        title: 'Pogadajmy',
        p1: `Szukam nowych projektów !<br/>Pisz śmiało w sprawie jakichkolwiek 
	        projektów przy których mogę pomóc albo które mogę uratować:)`
    },
    footer: 
    {
        p1: '<a href="https://github.com/schouffy/gamedev-portfolio" target="blank">Szablon</a> autorstwa schouffy',
        p2: 'Napisz do mnie na <a href="mailto:artur.midiaibim@gmail.com">artur.midiaibim@gmail.com</a> albo {{tutaj}}',

    },
    gameProjectsData: 
    {
        astrolingsDesc: `Gra multiplayer na PC i Android nad którą sam pracuję przez ostatnie 3 miesiące 
            (stan na grudzień 2024). Z założenia ma być podobna do 'Super Auto Pets' ale z większym naciskiem
            na deck building i customizację posiadanych zwierzątek oraz wydarzenia sezonowe.<br />
            <br />Wraz z postępem pracy pojawi się tutaj więcej informacji, linków i screenshotów.`,
        viewCone: "Artykuł 'Unity View Cone Tutorial'",
        viewConeDesc: `<a href="https://itch.io/blog/521186/unity-view-cone-tutorial" target="blank">Link do 
            artykułu</a>`,
        superliminalDesc: `<a href="https://itch.io/blog/547361/unity-superliminal-tutorial" target="blank">Link 
            do artykułu</a>`,
        hellHotelDesc: `Projekt studencki na Politechnice Warszawskiej w którym oprócz programowania sprawowałem 
            rolę faktycznego leada 6-osobowego zespołu.<br /><br />Gra do pobrania 
            jest za darmo <a href="https://rickimanda.itch.io/hell-hotel" target="blank">tutaj</a>.`,
        cyborgDesc: `Jeden z pierwszych moich projektów w Unity (Android).<br /><br />Gra została przeze mnie 
            dokończona i wydana na Google Play zbierając około tysiąca pobrań. Niestety Google lubi usuwać 
            nieodwracalnie konta deweloperów więc jakoś od marca 2024 nie da się już jej pobrać.`
    },
    otherProjectsData: 
    {
        flashoutDesc: `<div class="paragraph">
            <strong>Flashout 3</strong> to gra którą pomagałem portować z PC na PS4 i Xboxa One.
            <br/>
            <br/>
            <br/><a href="https://www.xbox.com/pl-PL/games/store/flashout-3/9n5hq9d2kfwn" target="blank">Flashout 3 na Xbox Store</a>.
            <br/><a href="https://store.playstation.com/pl-pl/product/EP1133-CUSA38153_00-0834589849184137" target="blank">Flashout 3 na PlayStation Store</a>.
            </div>`,
        cyjinDesc: `<div class="paragraph">
            <strong>Cyjin: The Cyborg Ninja</strong> to gra którą zportowałem z PC na Nintendo Switch.
            <br/>
            <br/>
            <br/><a href="https://www.nintendo.com/us/store/products/cyjin-the-cyborg-ninja-switch/?srsltid=AfmBOorH4PedVTjZHv7C-PQMuBjV1EC1OUgdjwyNQBUyk3fXGyt-wr3G" target="blank">Cyjin na Nintendo eShop</a>.
            </div>`,
        uboatDesc: `<div class="paragraph">
            <strong>Uboat Attack</strong> to mój największy solo port. Własnoręcznie zportowałem tę grę z Android/iOS na Nintendo Switch, PS4, PS5, Steam i Steam Deck. Całkowicie zmieniliśmy UI gry oraz ekonomię, wiele mechanik także uległo gruntownej modyfikacji.
            <br/>
            <br/>
            <br/><a href="https://www.nintendo.com/us/store/products/uboat-attack-switch/?srsltid=AfmBOorCLqSgVgE9vde4gwEdTx-j7qGkMY5nLDMHgTK8CgO3Kps7JfRY" target="blank">Uboat Attack na Nintendo eShop</a>.
            </div>`,
        masterSpyDesc: `<div class="paragraph">
            <strong>Master Spy</strong> to gra którą zportowałem z PC na Nintendo Switch. Oryginalny projekt napisany był w JavaScript bez żadnego silnika więc port wykonałem przez przepisanie całej gry do Unity.
            <br/>
            <br/>
            <br/><a href="https://www.nintendo.com/us/store/products/master-spy-switch/" target="blank">Master Spy na Nintendo eShop</a>.
            </div>`,
        notnotDesc: `<div class="paragraph">
            <strong>Not Not - A Brain Buster</strong> to gra której port na Microsoft Store wykańczałem. Naprawiłem wiele błędów, doszlifowałem dziwnie działające mechaniki i przygotowałem grę do wydania.
            <br/>
            <br/>
            <br/><a href="https://www.xbox.com/pl-PL/games/store/not-not-a-brain-buster/9p5v8ks3b9sw" target="blank">Not Not na Microsoft Store</a>.
            </div>`,
        woodturningDesc: `<div class="paragraph">
            <strong>Woodturning 3D</strong> to gra którą zportowałem z Android/iOS na Nintendo Switch.
            <br/>
            <br/>
            <br/><a href="https://www.nintendo.com/us/store/products/woodturning-3d-switch/?srsltid=AfmBOoq5siDl1l4efAdQSTXuleWsUNylId53dLhBioVFTsU39gNRN9wM" target="blank">Woodturning na Nintendo eShop</a>.
            </div>`,
        zombieRaftDesc: `<div class="paragraph">
            <strong>Zombie Raft</strong> to gra którą zportowałem z Android/iOS na Nintendo Switch. Oprócz portowania projekt ten dość mocno modyfikowałem, m.in. dodana została mechanika ograniczonego czasu zbierania zasobów wraz z nowym UI, zmieniony został system progresu w grze oraz zachowania i ataki zombie.
            <br/>
            <br/>
            <br/><a href="https://www.nintendo.com/us/store/products/zombie-raft-switch/" target="blank">Zombie Raft na Nintendo eShop</a>.
            </div>`
    }
}

export default pl