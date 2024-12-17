<template>
  <div>
    <h1>CV</h1>

    <div class="paragraph">
      Jestem Unity Developerem z Warszawy, mam 23 lata i 3 lata komercyjnego doświadczenia przy portowaniu gier.
      <br />Próbowałem paru języków jak C++, Python i JavaScript ale najlepiej odnajduję się w C#.
      <br />
      <br />Lubię zarządzać zespołami jak mam okazję i wywierać wpływ na efekt końcowy wspólnej pracy. Uważam że gry są bardzo skomplikowanymi ale angażującymi tworami i mam nadzieję móc spędzić przy ich produkcji całe życie.
      <br />
      <br />Na chwilę obecną pracuję przy własnej grze Astrolings i szukam pracy.
      <br />
      <br />Poza programowaniem pasjonuję się grami wideo oraz wspinaczką. Kocham sport, jazdę na rowerze i podróże.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/cv.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i>Pobierz jako PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Moje logo" />
    </div>

    <div style="clear:both"></div>

      <h2>Umiejętności</h2>
      <div class="skill-set">
        <h3>Różne</h3>
        <ul>
            <li>dobra znajomość Unity, C# i systemu kontroli wersji Git</li>
            <li>dobra znajomość Addressables, Rewired, Old & New Input System,<br/>Cinemachine, Frame Debugger-a, Profiler-a</li>
            <li>dobra znajomość wielu SDK Unity</li>
            <li>znajomość i stosowanie się do praktyk Clean Code, DRY, KISS, YAGNI etc.</li>
            <li>znajomość wzorców projektowych takich jak Singleton, Object Pooling etc.</li>
            <li>podstawowa znajomość Node Canvas, Odin Inspector, Wwise</li>
            <li>zainteresowanie i rozległa wiedza na temat rynku gier</li>
        </ul>
      </div>
      <div class="skill-set">
        <h3>SDK Unity - Platformy</h3>
        <ul>
            <li>Nintendo Switch</li>
            <li>PS4 & PS5</li>
            <li>GDK (Xbox One & Xbox Series X/S)</li>
            <li>Microsoft Store</li>
            <li>Steam</li>
            <li>Steam Deck</li>
        </ul>
      </div>
      <div style="clear:both" />

      <div class="full-content">
      <h2>Doświadczenie</h2>

      <h3>Naptime Games <span class="company-name">[Programista Portingu]</span></h3>
      <h4>06.2023-09.2024</h4>

      <div>
          <ul>
              <li>dodawanie mechanik i systemów UI do istniejących gier</li>
              <li>zportowanie 6 gier mobilnych w Unity (łącznie ponad <b><u>340 milionów pobrań</u></b>)</li>
              <li>portowanie na Nintendo, PS4, PS5, Xbox One, Microsoft Store, Steam, Steam Deck</li>
              <li>zarządzanie zespołem 2-3 programistów przy jednym z projektów</li>
          </ul>
      </div>

      <h3>No Gravity Development <span class="company-name">[Programista Portingu]</span></h3>
      <h4>10.2021-04.2023</h4>

      <div>
          <ul>
              <li>samodzielne portowanie gier w Unity na Nintendo: "Master Spy", "Cyjin: The Cyborg Ninja"</li>
              <li>pomoc przy portowaniu gry "Flashout 3" na Playstation i Xboxa</li>
              <li>rekonstrukcja w Unity projektu stworzonego w JavaScript</li>
          </ul>
      </div>

      <h3>Projekt "Hell Hotel" <span class="company-name">[Co-management i programowanie]</span></h3>
      <h4>10.2021-02.2022</h4>

      <div>
          <ul>
              <li>projekt studencki</li>
              <li>6-osobowy zespół</li>
          </ul>
      </div>

      <h3>Projekt "Cyborg" <span class="company-name">[Solo produkcja i opublikowanie]</span></h3>
      <h4>09.2020-12.2020</h4>

      <div>
          <ul>
              <li>stworzenie własnej gry na Google Play (2D)</li>
          </ul>
      </div>

      <h2>Języki</h2>

      <h3>Angielski</h3>
      <div>Mówię płynnie, napisałem maturę rozszerzoną na poziomie B2 na 94%, prawdopodobnie jestem gdzieś na C1/C2</div>

      <h3>Francuski</h3>
      <div>Szkoła, kursy i fiszki - prawdopodobnie jestem gdzieś na poziomie B1</div>

      <h3>Polski</h3>
      <div>Mój język ojczysty</div>


      <h2>Oprócz tego...</h2>
      <div>
        <h3>❤️ Gry wideo</h3>
        <div>Spędziłem większość życia grając w gry i oglądając gameplaye. Jestem nieźle zorientowany w tym rynku i miałem przyjemność rozmawiać z wieloma osobami które odniosły sukces w branży 😊
        <br />Jestem fanem m.in. Rainbow Six Siege, Thaumaturge, Red Dead Redemption 2, The Long Dark, Stardew Valley, Wiedźmina 3, Beat Copa, This Is the Police...</div>

        <h3>🧡 Sport</h3>
        <div>Większość moich pasji jest aktywna - sporo czasu spędzam biegając, wspinając się i na rowerze. Koszykówka też jest super 😊</div>

        <h3>💛 Góry</h3>
        <div>Niedawno odkryłem chodzenie po górach i zakochałem się w Tatrach. W 2024 pierwszy raz zdobyłem Rysy.</div>

        <h3>💚 Podróże</h3>
        <div>Miałem na tyle farta że mogłem zwiedzić większość dużych miast w Polsce i parę razy wybrać się za granicę m.in. do Bułgarii, Hiszpanii, Wielkiej Brytanii i Niemiec. Jedne z fajniejszych przygód w moim życiu 😊</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {},
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.company-name {
  opacity: 0.5;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>