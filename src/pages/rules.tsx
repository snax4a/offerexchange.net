import * as React from 'react';

import { ROUTES } from '@/lib/constants';

import Page from '@/components/layout/Page';
import PrimaryLink from '@/components/links/PrimaryLink';

import { siteConfig } from '@/config/site';

export default function Rules() {
  return (
    <Page>
      <div className='relative overflow-hidden bg-white py-16'>
        <div className='hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full'>
          <div className='relative mx-auto h-full max-w-prose text-lg' aria-hidden='true'>
            <svg
              className='absolute top-12 left-full translate-x-32 transform'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)'
              />
            </svg>
            <svg
              className='absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
              />
            </svg>
            <svg
              className='absolute bottom-12 left-full translate-x-32 transform'
              width={404}
              height={384}
              fill='none'
              viewBox='0 0 404 384'
            >
              <defs>
                <pattern
                  id='d3eb07ae-5182-43e6-857d-35c643af9034'
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits='userSpaceOnUse'
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className='text-gray-200'
                    fill='currentColor'
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)'
              />
            </svg>
          </div>
        </div>
        <div className='relative px-4 text-justify sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-prose text-lg'>
            <div className='relative mx-auto pt-10 pb-12 text-center md:pt-20 md:pb-24'>
              <h1 className='text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl'>
                Regulamin
              </h1>
              <p className='mt-4 text-base leading-7 text-slate-600'>
                Ostatnia aktualizacja 3 lipca 2022 r.
              </p>
            </div>
            <p className='mt-8 text-lg leading-8 text-gray-500'>
              Niniejszy regulamin został sporządzony w oparciu o przepisy prawa
              obowiązujące na terytorium Rzeczpospolitej Polskiej, a przedmiotem jego
              regulacji są zasady funkcjonowania oraz warunki korzystania z Aplikacji
              Offer Exchange (dalej jako: „Aplikacja”) dostępnej pod adresem internetowym{' '}
              <PrimaryLink href={siteConfig.siteUrl}>{siteConfig.siteUrl}</PrimaryLink>
              {', '}
              która przeznaczona jest dla Użytkowników szukających towarów i usług oraz
              oferujących je Dostawców i ma na celu usprawnienie procesu nawiązywania
              kontaktów handlowych pomiędzy nimi.
            </p>
          </div>
          <div className='prose prose-lg prose-indigo mx-auto mt-10 text-gray-500'>
            <h3 className='text-start'>I. Definicje użyte w niniejszym regulaminie</h3>

            <ul role='list' className='list-decimal'>
              <li>
                <strong>Administrator</strong> – CONETSO Spółka z o.o. Twarda 18, 00-105
                Warszawa, zarejestrowana w rejestrze przedsiębiorców Krajowego Rejestru
                Sądowego pod numerem KRS: 0000923544, NIP: 5252878354, REGON: 52006415,
                e-mail:{' '}
                <PrimaryLink href={`mailto:${siteConfig.legalContactMail}`}>
                  {siteConfig.legalContactMail}
                </PrimaryLink>
                , tel.{' '}
                <PrimaryLink href={`tel:${siteConfig.legalContactPhone}`}>
                  {siteConfig.legalContactPhone}
                </PrimaryLink>
              </li>
              <li>
                <strong>Offer Exchange, Aplikacja</strong> – aplikacja prowadzona przez
                Administratora pod adresem internetowym{' '}
                <PrimaryLink href={siteConfig.siteUrl}>{siteConfig.siteUrl}</PrimaryLink>
                {', '}
                dostępna na zasadach określonych w niniejszym Regulaminie.
              </li>
              <li>
                <strong>Regulamin</strong> – niniejszy regulamin Aplikacji.
              </li>
              <li>
                <strong>Użytkownik</strong> – osoba fizyczna posiadającą pełną zdolność do
                czynności prawnych, osoba prawna lub jednostka organizacyjna
                nieposiadająca osobowości prawnej, jeżeli tylko pozostaje przedsiębiorcą w
                rozumieniu art. 431 ustawy z dnia 23 kwietnia 1964 r. Kodeks cywilny (Dz.
                U. z 1964 r., Nr 16, poz. 93, z późn. zm.), zawierająca Umowę z
                Administratorem w celu związanym bezpośrednio z jej działalnością
                gospodarczą lub zawodową.
              </li>
              <li>
                <strong>Rejestracja</strong> – procedura, w ramach której Użytkownik
                podaje swoje dane osobowe oraz dane kontaktowe w formularzu rejestracyjnym
                i otrzymuje dostęp do Aplikacji za pośrednictwem Konta z odpowiednimi
                funkcjonalnościami na zasadach określonych w niniejszym Regulaminie.
              </li>
              <li>
                <strong>Konto Użytkownika, Konto</strong> – dostępne dla zarejestrowanego
                Użytkownika miejsce w Aplikacji, za pośrednictwem którego wprowadza on
                dane i zarządza nimi.
              </li>
              <li>
                <strong>Zapytanie</strong> – zapytanie ofertowe złożone w Aplikacji za
                pomocą interaktywnego formularza przez Użytkownika celem jego przesłania
                do Handlowca.
              </li>
              <li>
                <strong>Handlowiec</strong> – osoba fizyczna posiadająca pełną zdolność do
                czynności prawnych, działająca w imieniu Dostawcy, upoważniona do
                przesyłania za pomocą formularza Aplikacji Ofert w odpowiedzi na otrzymane
                uprzednio od Użytkownika Zapytanie.
              </li>
              <li>
                <strong>Dostawca</strong> - osoba fizyczna, osoba prawna lub jednostka
                organizacyjna nieposiadająca osobowości prawnej posiadająca status
                przedsiębiorcy, mogąca dostarczyć usługę lub produkt, do którego
                Użytkownik wysyła za pośrednictwem Aplikacji Zapytanie. W przypadku osób
                fizycznych dostawcą może być wyłącznie osoba, dla której posiadanie
                statusu Dostawcy zgodnie z Regulaminem związane jest z jej działalnością
                gospodarczą i posiada ono dla niej charakter zawodowy, wynikający w
                szczególności z przedmiotu wykonywanej przez nią działalności
                gospodarczej, udostępnionego na podstawie przepisów o Centralnej Ewidencji
                i Informacji o Działalności Gospodarczej.
              </li>
              <li>
                <strong>Oferta</strong> – oferta przedstawiona przez Handlowca za pomocą
                Formularza w Aplikacji w odpowiedzi na Zapytanie Ofertowe kierowane przez
                Użytkownika. Oferta nie stanowi oferty w rozumieniu art. 66 § 1 oraz § 2
                Kodeksu Cywilnego, a zaproszenie do składania ofert i zawarcia umowy w
                rozumieniu art. 71 Kodeksu Cywilnego.
              </li>
              <li>
                <strong>Umowa</strong> – umowa zawarta pomiędzy Administratorem a
                Użytkownikiem, na mocy której Administrator zobowiązuje się do świadczenia
                na rzecz Użytkownika usług w postaci narzędzi do nawiązywania kontaktu z
                Dostawcami poprzez reprezentujących ich Handlowców i kierowania do nich
                Zapytań, a następnie prezentowania Ofert otrzymanych w odpowiedzi na
                złożone Zapytania oraz umożliwienia Użytkownikowi wszechstronnej analizy i
                archiwizacji otrzymanych Ofert celem wyboru Oferty najkorzystniejszej dla
                Użytkownika.
              </li>

              <h3 className='text-start'>
                II. Wymagania techniczne i zasady dostępu do aplikacji
              </h3>

              <ul role='list' className='list-decimal'>
                <li>
                  Aplikacja dostępna jest dla wszystkich osób korzystających z urządzeń
                  mobilnych, które to urządzenia spełniają wskazane poniżej wymagania
                  techniczne.
                </li>
                <li>
                  Urządzenie mobilne Użytkownika, na którym ma zostać uruchomiona
                  Aplikacja, powinno spełniać następujące wymagania techniczne:
                  <ul role='list'>
                    <li>aktywne połączenie internetowe</li>
                    <li>
                      nowoczesna przeglądarka internetowa (Microsoft Edge, Mozilla
                      Firefox, Google Chrome, Safari, Opera).
                    </li>
                  </ul>
                </li>
                <li>
                  Aby korzystać z funkcjonalności Aplikacji, Użytkownik powinien dokonać
                  uprzedniej rejestracji za pośrednictwem Aplikacji (dalej:
                  „Rejestracja”), polegającej na założeniu indywidualnego konta
                  Użytkownika (dalej: „Konto”).
                </li>
                <li>
                  Do dokonania Rejestracji wymagane jest podanie przez Użytkownika
                  następujących danych:
                  <ul role='list'>
                    <li>imię i nazwisko</li>
                    <li>nazwa firmy</li>
                    <li>adres e-mail</li>
                    <li>numer telefonu</li>
                    <li>hasło logowania</li>
                  </ul>
                </li>
                <li>
                  Do dokonania Rejestracji wymagane jest potwierdzenie przez Użytkownika,
                  że zapoznał się z Regulaminem Aplikacji i akceptuje jego treść, jak
                  również potwierdzenia, że zapoznał się i akceptuje zasady Polityki
                  prywatności i ochrony danych osobowych.
                </li>
                <li>
                  Po dokonaniu Rejestracji za pomocą formularza rejestracyjnego,
                  Użytkownik otrzyma na wskazany przez siebie w procesie rejestracji
                  adres, e-mail potwierdzający rejestrację.
                </li>
                <li>
                  Po dokonaniu Rejestracji i zalogowaniu się Użytkownik dokonuje wyboru
                  jednego z trzech planów subskrypcyjnych, a następnie uiszcza odpowiednią
                  opłatę z tytułu korzystania z Aplikacji na zasadach określonych w
                  Rozdziale VI Regulaminu. Użytkownik bez aktywnej subskrypcji może
                  korzystać z Aplikacji nieodpłatnie, ale z pewnymi limitami (ilość
                  wysłanych zapytań w ciągu miesiąca, ilość możliwych produktów i
                  odbiorców w zapytaniu). Zakup odpowiedniego planu subskrypcyjnego
                  zwiększa ten limit.
                </li>
                <li>
                  Użytkownikowi przysługuje prawo edytowania swoich danych podanych
                  podczas Rejestracji oraz zmiany ustalonego podczas Rejestracji hasła.
                  Edycja danych oraz zmiana hasła możliwa jest za pośrednictwem Aplikacji.
                </li>
                <li>
                  W trakcie Rejestracji, jak również w związku z korzystaniem z Aplikacji,
                  Użytkownik zobowiązany jest do:
                  <ul role='list'>
                    <li>
                      podawania danych zgodnych z prawdą, dokładnych i aktualnych oraz
                      niewprowadzających w błąd
                    </li>
                    <li>
                      aktualizacji danych podanych podczas Rejestracji w przypadku ich
                      późniejszej zmiany
                    </li>
                    <li>aktualizacji danych dokonuje się w ramach ustawień Aplikacji</li>
                    <li>
                      zachowania w tajemnicy hasła do logowania w Aplikacji oraz
                      nieudostępniania go innym osobom.
                    </li>
                  </ul>
                </li>
                <li>
                  Administrator może rozszerzyć formularz rejestracyjny o dodatkowe pola,
                  których wypełnienie przez Użytkownika jest dobrowolne (dane opcjonalne)
                  i nie ma wpływu na pozytywne zakończenie procesu Rejestracji.
                </li>
                <li>
                  Użytkownik ponosi wyłączną odpowiedzialność za niezgodność podanych
                  przez siebie danych, jak również za ujawnienie przez niego osobom
                  trzecim hasła do logowania w Aplikacji.
                </li>
                <li>
                  Administrator informuje, że nie weryfikuje w żaden sposób tożsamości
                  Użytkowników podczas ich Rejestracji. W przypadku uzasadnionych
                  wątpliwości co do prawdziwości danych podanych przez Użytkownika podczas
                  Rejestracji, Administrator zastrzega sobie prawo ograniczenia
                  Użytkownikowi możliwości korzystania z Aplikacji do czasu potwierdzenia
                  przez Użytkownika, iż podał on prawdziwe dane. Administrator wskaże
                  Użytkownikowi sposób potwierdzenia danych za pomocą wiadomości
                  przesłanej na adres email podany przez Użytkownika podczas Rejestracji.
                </li>
                <li>
                  Użytkownik może mieć zarejestrowane tylko jedno Konto w Aplikacji.{' '}
                </li>
                <li>Konta nie wolno odsprzedawać ani udostępniać osobom trzecim.</li>
              </ul>
            </ul>

            <h3 className='text-start'>
              III. Szczegółowe zasady korzystania z aplikacji
            </h3>

            <ul role='list' className='list-decimal'>
              <li>
                Po zalogowaniu się przez Użytkownika do Aplikacji poprzez podanie
                ustanowionego wcześniej loginu i hasła, Użytkownik może korzystać z
                następujących zakładek – funkcjonalności:
                <ul role='list'>
                  <li>
                    Handlowcy – za pomocą której definiuje i wprowadza do systemu dane
                    Handlowców (imię, nazwisko, adres e – mail, opcjonalnie nazwa firmy),
                    do których zamierza kierować Zapytanie. Przy użyciu grup Użytkownik
                    może organizować Handlowców np. według dziedziny produktów lub usług,
                    jakimi handlują. Dzięki temu przy wysyłaniu Zapytania w łatwy sposób
                    Użytkownik wybierze odpowiednich odbiorców.
                  </li>
                  <li>
                    Zapytania – za pomocą której Użytkownik tworzy i gromadzi Zapytania
                    kierowane do Handlowców. Użytkownik może sortować zapisane Zapytania z
                    uwzględnieniem danych takich jak: numer referencyjny, nazwa własna
                    Zapytania, data utworzenia Zapytania, dane Handlowca.
                  </li>
                  <li>
                    Oferty – za pomocą której gromadzone i sortowane są Oferty złożone za
                    pomocą Aplikacji przez Handlowców. Zakładka umożliwia przeglądanie
                    Ofert z uwzględnieniem danych takich jak: numer Zapytania, imię i
                    nazwisko Handlowca, wartość Oferty, termin ważności Oferty.
                  </li>
                  <li>
                    Porównywarka – za pomocą której Użytkownik ma możliwość porównania
                    przez system złożonych Ofert, jak również utworzenia zamówień na
                    wybrane produkty z otrzymanych Ofert.{' '}
                  </li>
                  <li>
                    Zamówienia – za pomocą której Użytkownik ma dostęp do zestawienia
                    listy i szczegółów złożonych Zamówień oraz może tworzyć nowe
                    Zamówienia.
                  </li>
                </ul>
              </li>
              <li>
                Aplikacja umożliwia Użytkownikowi sformułowanie i wysłanie do
                zdefiniowanych wcześniej przez siebie Handlowców Zapytania o określone
                towary lub usługi.
              </li>
              <li>
                Po wysłaniu Zapytania, Handlowiec otrzymuje na swój adres e – mail
                wiadomość wysłaną przez Aplikację, zawierającą link odsyłający do
                Aplikacji, gdzie za pomocą przygotowanego formularza – w odpowiedzi na
                Zapytanie Użytkownika - Handlowiec uzupełnia dane dotyczące Oferty
                Dostawcy, w imieniu którego działa.
              </li>
              <li>
                Przed wypełnieniem formularza ofertowego, Handlowiec składa oświadczenie o
                akceptacji Regulaminu, jak również oświadczenie w zakresie przetwarzania
                danych osobowych.
              </li>
              <li>
                Wypełnienie formularza ofertowego przez Handlowca ma charakter dobrowolny.
              </li>
              <li>
                Po wypełnieniu i odesłaniu formularza ofertowego przez Handlowca,
                Aplikacja porównuje wszystkie otrzymane Oferty i przedstawia Użytkownikowi
                informację końcową ze wskazaniem najkorzystniejszej Oferty, uwzględniając
                wskazane przez Użytkownika kryteria.
              </li>
              <li>Zapytania mogą być składane wyłącznie przez Użytkowników Aplikacji.</li>
              <li>
                Po dokonaniu wyboru preferowanej przez siebie Oferty, Użytkownik wyraża
                chęć zakupu określonego produktu lub usługi, przesyłając za pośrednictwem
                Aplikacji do Handlowca Zamówienie. W wiadomości e - mail Handlowiec
                otrzymuje link, za pomocą którego zapoznaje się ze szczegółami Zamówienia
                i może je przyjąć lub odrzucić (zmienić status Zamówienia).
              </li>
              <li>
                Oferty zamieszczone w Aplikacji nie stanowią oferty w rozumieniu art. 66 §
                1 oraz § 2 Kodeksu Cywilnego, a zaproszenie do składania ofert i zawarcia
                umowy w rozumieniu art. 71 Kodeksu Cywilnego.
              </li>
              <li>
                Korzystanie z Aplikacji nie prowadzi bezpośrednio do zawarcia umowy
                sprzedaży pomiędzy Użytkownikiem a Dostawcą, w imieniu którego działa
                Handlowiec. Celem zawarcia i realizacji umowy sprzedaży w oparciu o
                Zamówienie Użytkownika, Handlowiec i Użytkownik kontaktują się poza
                Aplikacją.
              </li>
              <li>
                Administrator nie pośredniczy w zawieraniu ewentualnej umowy pomiędzy
                Użytkownikiem a Dostawcą produktów lub usług.
              </li>
            </ul>

            <h3 className='text-start'>IV. Odpowiedzialność administratora</h3>

            <ul role='list' className='list-decimal'>
              <li>
                Administrator prowadzi bieżący nadzór nad technicznym funkcjonowaniem
                Aplikacji, zapewniając poprawność jej działania.
              </li>
              <li>
                Użytkownik korzysta z Aplikacji dobrowolnie, na własną odpowiedzialność i
                powinien zapewnić możliwość poprawnego funkcjonowania Aplikacji w
                zakresie, w jakim jest to zależne od Użytkownika (np. prawidłowe
                funkcjonowania urządzenia mobilnego, stosowanie ustawień umożliwiających
                odbieranie bieżących powiadomień z Aplikacji itp.). Za działania usług,
                aplikacji i serwisów internetowych innych niż Aplikacja odpowiedzialność
                ponoszą ich dostawcy.
              </li>
              <li>
                Administrator nie ponosi odpowiedzialności za ograniczenia lub problemy
                techniczne w systemach teleinformatycznych, z których korzystają
                urządzenia mobilne Użytkowników, a które uniemożliwiają lub ograniczają
                użytkownikom korzystanie z Aplikacji i oferowanych za jej pośrednictwem
                usług.
              </li>
              <li>
                Administrator nie jest stroną umów, porozumień lub innych czynności
                prawnych dokonywanych pomiędzy Użytkownikiem a Dostawcą reprezentowanym
                przez Handlowca, wobec czego Administrator nie ponosi wobec Dostawcy
                odpowiedzialności za niewykonanie lub nienależyte wykonanie umów zawartych
                w następstwie lub w związku z przesłaniem Zapytania.
              </li>
              <li>
                Administrator nie ponosi odpowiedzialności za jakość świadczenia oraz
                dostępność oferowanych przez Dostawców produktów lub usług jak również za
                zmiany warunków, na jakich usługi te są oferowane przez Dostawców.
              </li>
              <li>
                Administrator nie odpowiada za działania Handlowców, z którymi Użytkownik
                utrzymuje kontakt za pośrednictwem Aplikacji.
              </li>
            </ul>

            <h3 className='text-start'>V. Obowiązki użytkownika</h3>

            <ul role='list' className='list-decimal'>
              <li>
                Użytkownik zobowiązany jest do korzystania z Aplikacji w sposób zgodny z
                obowiązującym prawem, z poszanowaniem praw własności intelektualnej, zasad
                współżycia społecznego i dobrych obyczajów.
              </li>
              <li>
                Użytkownik zobowiązany jest ponadto do korzystania z Aplikacji w sposób
                odpowiedzialny. Zakazane jest dostarczanie danych o charakterze bezprawnym
                i wprowadzanie do Aplikacji wirusów oraz innych elementów, które mogłoby
                uszkodzić, zniszczyć lub mieć jakikolwiek inny negatywny wpływ na
                funkcjonowanie Aplikacji.
              </li>
              <li>
                W przypadku naruszenia przez Użytkownika zasad określonych w ust. 2,
                Administrator uprawniony będzie do natychmiastowego zablokowania
                Użytkownikowi dostępu do jego Konta. Naruszenie takie może być również
                przyczyną rozwiązania Umowy z Użytkownikiem w trybie natychmiastowym.
              </li>
              <li>
                Użytkownik ponosi odpowiedzialność za szkody powstałe w wyniku zachowania
                niezgodnego z powyższymi postanowieniami. W przypadku naruszenia
                powyższych zasad, Administrator ma prawo do podjęcia odpowiednich kroków
                prawnych celem uzyskania stosownego odszkodowania na zasadach,
                przewidzianych w prawie cywilnym.
              </li>
              <li>
                Użytkownik Aplikacji jest zobowiązany do respektowania praw własności
                intelektualnej i zobowiązany do wykorzystywania wszelkich prezentowanych w
                Aplikacji treści wyłącznie w zakresie własnego osobistego użytku.
              </li>
              <li>
                Użytkownik jest zobowiązany do wprowadzania w Aplikacji, w tym w
                formularzu rejestracyjnym, na stronie profilowej wyłącznie danych
                aktualnych, zgodnych ze stanem faktycznym, nie wprowadzających w błąd
                innych Użytkowników, ani Administratora oraz do niezwłocznego informowania
                o jakichkolwiek zmianach dotyczących przekazanych Administratorowi danych
                lub dokonywania samodzielnie zmiany tych danych za pomocą dostępnych w
                Koncie funkcjonalności.
              </li>
              <li>
                Za wszelkie skutki wynikłe z niewłaściwego wypełnienia formularzy w
                Aplikacji przez Użytkownika, w szczególności polegającego na podaniu
                nieprawdziwych lub błędnych danych oraz jakichkolwiek skutków wprowadzenia
                tych danych do obrotu, pełną odpowiedzialność ponosi Użytkownik.
              </li>
              <li>
                Administrator nie ponosi odpowiedzialności za niepoprawne wypełnienie
                przez Użytkownika formularzy w Aplikacji, a w szczególności nie ponosi
                odpowiedzialności względem osób trzecich, których dane zostały dodane w
                Aplikacji bez ich wiedzy i zgody.
              </li>
              <li>
                Administrator nie ponosi odpowiedzialności względem Handlowców, których
                dane osobowe zostały wprowadzone przez Użytkownika w Aplikacji bez ich
                wiedzy i zgody.
              </li>
            </ul>

            <h3 className='text-start'>VI. Opłaty</h3>

            <ul role='list' className='list-decimal'>
              <li>
                Dostęp do Aplikacji dla Użytkowników jest odpłatny, z zastrzeżeniem, ust.
                2.
              </li>
              <li>
                Użytkownik może uzyskać darmowy dostęp do Aplikacji (opcja Free). Dostęp
                do Aplikacji ograniczony jest wówczas limitem ilości Zapytań składanych za
                pośrednictwem Aplikacji, jak również ilość limitem możliwych Produktów i
                odbiorców w Zapytaniu.
              </li>
              <li>
                Dostęp do Aplikacji opłacany jest przez Użytkownika w cyklach rocznych lub
                miesięcznych (abonament). Użytkownik dokonuje jednego z dostępnych planów
                subskrypcyjnych. Szczegółowy i aktualny opis planów subskrypcyjnych
                dostępny jest na stronie głównej aplikacji -{' '}
                <PrimaryLink href={`${siteConfig.siteUrl}${ROUTES.PRICING}`}>
                  {siteConfig.siteUrl}
                </PrimaryLink>
              </li>
              <li>
                Użytkownik może dokonać płatności kartą przez system płatniczy STRIPE.
              </li>
              <li>
                Ceny dostępnych dla Użytkownika usług oferowanych przez Administratora w
                Aplikacji zostały opisane w cenniku. Korzystanie z Aplikacji przez
                Handlowca jest nieodpłatne.
              </li>
              <li>Użytkownik ma dostęp do cennika pod adresem offerexchange.net.</li>
              <li>
                Opłata za usługi jest pobierana od Użytkownika z góry podczas procesu
                Rejestracji lub podczas procesu odnawiania abonamentu.
              </li>
              <li>
                Płatne usługi stają się dostępne dla Użytkownika po wpłynięciu należności
                na konto Administratora.
              </li>
              <li>
                Po wpłynięciu należności Administrator wystawi fakturę, którą prześle na
                adres email Użytkownika.
              </li>
              <li>
                Dane do faktury pobierane są z konta Użytkownika oraz formularza
                płatności.
              </li>
              <li>
                Użytkownik upoważnia Administratora do wystawienia faktur oraz faktur
                korekt VAT bez podpisu odbiorcy.
              </li>
              <li>
                Użytkownik zgadza się na przesyłanie faktur oraz faktur korekt VAT drogą
                elektroniczną na adres e – mail Użytkownika.
              </li>
              <li>
                Administrator zastrzega sobie prawo zmiany cennika w każdej chwili. Zmiana
                cennika nie wpływa na usługi zakupione przez Użytkownika przed jego
                zmianą.
              </li>
              <li>
                Nowy cennik zaczyna obowiązywać Użytkowników z chwilą jego ogłoszenia na
                stronie głównej aplikacji -{' '}
                <PrimaryLink href={`${siteConfig.siteUrl}${ROUTES.PRICING}`}>
                  {siteConfig.siteUrl}
                </PrimaryLink>
              </li>
            </ul>

            <h3 className='text-start'>VII. Rozwiązanie umowy</h3>

            <ul role='list' className='list-decimal'>
              <li>
                Świadczenie usług przez Administratora w ramach Aplikacji ma charakter
                terminowy i odbywa cyklach rocznych lub miesięcznych (Abonament), jednakże
                Użytkownikowi przysługuje prawo rozwiązania Umowy (anulowania Abonamentu)
                w każdym czasie.
              </li>
              <li>
                Oświadczenie o rozwiązaniu Umowy Użytkownik może złożyć pisemnie
                przesyłając je na adres pocztowy Administratora lub za pomocą formularza
                znajdującego się pod adresem:{' '}
                <PrimaryLink href={`${siteConfig.siteUrl}${ROUTES.SUPPORT}`}>
                  {`${siteConfig.siteUrl}${ROUTES.SUPPORT}`}
                </PrimaryLink>
              </li>
              <li>
                Rozwiązanie umowy przed czasem przez Użytkownika nie zwalnia go z
                obowiązku pokrycia opłat z tytułu korzystania z Aplikacji za cały okres,
                na który zawarta została Umowa.
              </li>
              <li>
                Z zastrzeżeniem pozostałych postanowień Regulaminu, Umowa może zostać
                rozwiązana przez Administratora w trybie natychmiastowym gdy:
                <ul role='list'>
                  <li>
                    Użytkownik narusza postanowienia Regulaminu, bądź zaakceptowanych
                    przez Użytkownika odrębnych regulaminów usług, lub
                  </li>
                  <li>
                    stwierdzono podanie przez Użytkownika danych lub oświadczeń
                    nieprawdziwych, nieaktualnych, nieprawidłowych bądź niepełnych lub też
                    danych innych osób, lub
                  </li>
                  <li>
                    działania lub zaniechania Użytkownika negatywnie wpływają na dobre
                    imię Administratora lub w inny sposób istotnie szkodzą
                    Administratorowi.
                  </li>
                </ul>
              </li>
              <li>
                W przypadku rozwiązania Umowy ze skutkiem natychmiastowym:
                <ul role='list'>
                  <li>
                    Administrator zablokuje Użytkownikowi dostęp do Aplikacji z chwilą
                    wysłania Użytkownikowi oświadczenia o rozwiązaniu Umowy na adres email
                    wskazany do kontaktu przez Użytkownika.
                  </li>
                  <li>
                    na udokumentowane życzenie Użytkownika, Administrator udostępni mu
                    wszystkie dane, jakie zostały umieszczone w Aplikacji, w zakresie w
                    jakim będzie to zgodne z prawem, odpowiednio do technicznych
                    możliwości Administratora.
                  </li>
                  <li>
                    Administrator usunie dane Użytkownika zgodnie z wyżej wskazanymi
                    postanowieniami Regulaminu.
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className='text-start'>VIII. Autorskie prawa majątkowe oraz licencja</h3>

            <ul role='list' className='list-decimal'>
              <li>
                Usługa Administratora jest świadczona poprzez Aplikację, która jest
                przedmiotem wyłącznej własności Administratora w zakresie majątkowych praw
                autorskich. Wobec czego Administrator gwarantuje, iż służą mu wyłączne
                autorskie prawa majątkowe do wszelkich utworów wchodzących w zakres
                przedmiotowej Aplikacji, prawo zezwalania na wykonywanie zależnych praw
                autorskich w stosunku do Aplikacji oraz wyłączne prawo do rozporządzania
                Aplikacją na polach eksploatacji określonych w ust. 5.
              </li>
              <li>
                Autorskie prawa majątkowe do elementów Aplikacji, w tym logotypy i treści
                zamieszczone w Aplikacji, a także do układu kompozycji tych elementów
                (tzw. layout) oraz prawa własności przemysłowej należą wyłącznie do
                Administratora.
              </li>
              <li>
                Użytkownik nie jest uprawniony do kopiowania, rozpowszechniania,
                reprodukowania lub modyfikowania jakichkolwiek treści, w tym danych
                umieszczonych w Aplikacji.
              </li>
              <li>
                Z momentem uzyskania przez Użytkownika dostępu do usługi Aplikacji zostaje
                Użytkownikowi przez Administratora udzielona na czas określony (czas
                trwania opłaconego abonamentu) niewyłączna, niezbywalna i
                wielostanowiskowa licencja na korzystanie z Aplikacji, na zasadach i
                warunkach określonych w niniejszym Regulaminie.
              </li>
              <li>
                Administrator udziela Użytkownikowi niewyłącznej i niezbywalnej licencji
                na korzystanie z Aplikacji na czas nieokreślony na następujących polach
                eksploatacji:
                <ul role='list'>
                  <li>
                    stosowanie Aplikacji zgodnie z jej przeznaczeniem i w tym celu
                    uruchamianie i wyświetlanie Aplikacji za pośrednictwem sieci Internet
                    (on-line).
                  </li>
                  <li>
                    sporządzenie kopii zapasowej plików generowanych z Aplikacji tj.
                    raportów i innych plików generowanych przez Aplikację.
                  </li>
                </ul>
              </li>
              <li>
                Z zastrzeżeniem bezwzględnie obowiązujących przepisów Prawa autorskiego,
                Użytkownik nie może w szczególności:
                <ul role='list'>
                  <li>
                    dokonywać czynności tłumaczenia, przystosowywania, zmiany układu lub
                    jakichkolwiek innych zmian w Aplikacji, w tym usuwać jej ew. błędów
                  </li>
                  <li>
                    rozpowszechniać, w tym użyczać lub najmować, ani udostępniać osobom
                    trzecim Aplikacji ani jej fragmentów, w tym Aplikacji ani jej
                    zawartości/fragmentów, ani jego/jej kopii
                  </li>
                  <li>
                    udostępniać Aplikacji ani jej fragmentów, w tym usług w niej zawartych
                    ani ich zawartości/fragmentów, ani jego/ich kopii z serwerów, na
                    stronach Web czy z innych urządzeń, które powodowałyby jego dostępność
                    dla podmiotów trzecich
                  </li>
                  <li>dekompilować ani deasemblować Aplikacji</li>
                  <li>
                    wprowadzać jakichkolwiek poprawek, modyfikacji czy zmian w strukturze
                    Aplikacji
                  </li>
                  <li>stosować Aplikacji w innym celu niż uzgodniony</li>
                  <li>
                    udzielać osobom trzecim dalszych licencji (sublicencji) na korzystanie
                    z Aplikacji lub materiałów w niej zawartych ani przenosić na osoby
                    trzecie praw i obowiązków wynikających z Licencji.
                  </li>
                </ul>
              </li>
              <li>
                Z zastrzeżeniem powszechnie obowiązujących przepisów prawnych, Licencja
                uprawnia do korzystania z Aplikacji tylko dla własnych potrzeb
                wewnętrznych Użytkownika, z zastrzeżeniem ograniczeń określonych w treści
                Regulaminu.
              </li>
              <li>
                Korzystanie przez Użytkownika z Aplikacji będzie możliwe wyłącznie za
                pośrednictwem sieci Internet (on-line).
              </li>
              <li>
                Zachowania osób działających w imieniu Użytkownika, w szczególności osoby
                administrującej Licencją są traktowane w ramach niniejszego Regulaminu jak
                zachowania Użytkownika ze wszystkimi skutkami stąd wynikającymi dla
                Użytkownika.
              </li>
              <li>
                Akceptując Regulamin, Użytkownik wyraża zgodę na to, aby do istniejącego
                zakresu Aplikacji był dodawany nowy lub rozbudowywany istniejący zakres
                (m.in. funkcji technicznych, informatycznych).
              </li>
              <li>
                Licencja udzielana jest na okres, w którym Usługobiorca uprawniony jest do
                korzystania z usługi Aplikacji na gruncie Umowy.{' '}
              </li>
              <li>
                Każde naruszenie praw autorskich Administratora przez Użytkownika
                spowoduje powstanie odpowiedzialność cywilnej lub karnej z tego tytułu,
                zgodnie z postanowieniami Ustawy z dnia 04 lutego 1994 r. o prawie
                autorskim i prawach pokrewnych (t.j. Dz.U. z 2006 r., 90, poz. 631, z
                późn. zm.) i może być podstawą do rozwiązania umowy przez Administratora
                ze skutkiem natychmiastowym.
              </li>
            </ul>

            <h3 className='text-start'>
              IX. Ochrona danych osobowych. Polityka prywatności
            </h3>

            <ul role='list' className='list-decimal'>
              <li>
                W celu wykonania i rozliczenia Umowy Użytkownik udostępnia
                Administratorowi swoje dane osobowe (jeśli Użytkownik jest osobą fizyczną)
                lub innych osób wskazanych do kontaktu przez Użytkownika, jak i osób
                upoważnionych do reprezentowania Użytkownika.
              </li>
              <li>
                W sprawach danych osobowych, Użytkownik może się skontaktować się z
                Administratorem pod adresem pocztowym:{' '}
                <PrimaryLink href={`mailto:${siteConfig.rodoContactMail}`}>
                  {siteConfig.rodoContactMail}
                </PrimaryLink>
              </li>
              <li>
                Szczegółowe zasady przetwarzania i ochrony danych osobowych zawarte są w
                załącznik nr 1 do Regulaminu - Polityka prywatności/Informacja o ochronie
                danych osobowych, który dodatkowo dostępny jest również pod adresem
                <PrimaryLink href={`${siteConfig.siteUrl}${ROUTES.PRIVACY_POLICY}`}>
                  {`${siteConfig.siteUrl}${ROUTES.PRIVACY_POLICY}`}
                </PrimaryLink>
              </li>
            </ul>

            <h3 className='text-start'>
              X. Powierzenie przetwarzania danych osobowych administratorowi
            </h3>

            <ul role='list' className='list-decimal'>
              <li>
                Administrator zakresie, w jakim świadczy usługę w ramach Aplikacji i
                przetwarza dane osobowe w imieniu Użytkownika, stosuje zasady i standardy
                określone w RODO, a w szczególności wynikające z wymogów art. 28 RODO.
              </li>
              <li>
                Administrator będzie przetwarzać dane powierzone przez Użytkownika przez
                okres świadczenia usług w ramach Aplikacji. Na potrzeby niniejszego
                rozdziału, Administrator zwany jest dalej „Podmiotem przetwarzającym”.
              </li>
              <li>
                Celem powierzenia przetwarzania danych przez Użytkownika jest możliwość
                korzystania z usług określonych w Regulaminie wspierających działalność
                Użytkownika.
              </li>
              <li>
                Powierzenie przetwarzania obejmuje przechowywanie danych wprowadzonych
                przez Użytkownika w celu, zakresie i na zasadach określonych przez
                niniejszy Regulamin.
              </li>
              <li>
                Użytkownik powierza Administratorowi przetwarzanie danych wprowadzonych do
                Aplikacji, w tym w szczególności dane osobowe Handlowców (imię, nazwisko,
                adres e – mail).
              </li>
              <li>
                Użytkownik oświadcza, że jest uprawniony do przetwarzania danych w
                zakresie, w jakim powierzył je Administratorowi.
              </li>
              <li>
                Podmiot przetwarzający jest odpowiedzialny za udostępnienie lub
                wykorzystanie danych osobowych niezgodnie z treścią umowy, a w
                szczególności za udostępnienie powierzonych do przetwarzania danych
                osobowych osobom nieupoważnionym.
              </li>
              <li>
                Administrator jako Podmiot przetwarzający zobowiązuje się do niezwłocznego
                poinformowania Użytkownika o jakimkolwiek postępowaniu, w szczególności
                administracyjnym lub sądowym, dotyczącym przetwarzania przez Podmiot
                przetwarzający danych osobowych określonych w umowie, o jakiejkolwiek
                decyzji administracyjnej lub orzeczeniu dotyczącym przetwarzania tych
                danych, skierowanych do Podmiotu przetwarzającego, a także o wszelkich
                planowanych, o ile są wiadome, lub realizowanych kontrolach i inspekcjach
                dotyczących przetwarzania w Podmiocie przetwarzającym tych danych
                osobowych, w szczególności prowadzonych przez inspektorów upoważnionych
                przez Prezesa Urzędu Ochrony Danych Osobowych.
              </li>
              <li>
                Podmiot przetwarzający przed rozpoczęciem przetwarzania zobowiązuje się do
                podjęcia środków zabezpieczających dane osobowe oraz spełnienia wymagań
                Rozporządzenia.
              </li>
              <li>
                Podmiot przetwarzający zobowiązuje się, przy przetwarzaniu powierzonych
                danych osobowych, do ich zabezpieczenia poprzez stosowanie odpowiednich
                środków technicznych i organizacyjnych zapewniających adekwatny stopień
                bezpieczeństwa odpowiadający ryzyku związanym z przetwarzaniem danych
                osobowych, o których mowa w art. 32 Rozporządzenia oraz zgodnie z art. 25
                Rozporządzenia RODO.
              </li>
              <li>
                Podmiot przetwarzający zobowiązuje się dołożyć należytej staranności przy
                przetwarzaniu powierzonych danych osobowych.
              </li>
              <li>
                Podmiot przetwarzający zobowiązuje się do nadania upoważnień do
                przetwarzania danych osobowych wszystkim osobom, które będą przetwarzały
                powierzone dane w celu realizacji niniejszej umowy oraz zapewnić znajomość
                przepisów prawa w zakresie ochrony danych osobowych przez te osoby.
              </li>
              <li>
                Podmiot przetwarzający zobowiązuje się zapewnić zachowanie w tajemnicy, (o
                której mowa w art. 28 ust 3 pkt b Rozporządzenia) przetwarzanych danych
                przez osoby, które upoważnia do przetwarzania danych osobowych w celu
                realizacji niniejszej umowy, zarówno w trakcie zatrudnienia ich w
                Podmiocie przetwarzającym, jak i po jego ustaniu.
              </li>
              <li>
                Podmiot przetwarzający po zakończeniu świadczenia usług związanych z
                przetwarzaniem usuwa wszelkie dane osobowe oraz usuwa wszelkie ich
                istniejące kopie, chyba że prawo Unii lub prawo państwa członkowskiego
                nakazują przechowywanie danych osobowych, o czym informuje Administratora.
                Usunięcie danych lub ich zwrot powinien być stwierdzony protokolarnie.
                Dotyczy także podwykonawców. Na udokumentowane życzenie Użytkownika,
                (Administratora danych).
              </li>
              <li>
                W przypadku uzasadnionego podejrzenia, iż powierzone do przetwarzania dane
                osobowe przetwarzane są w sposób naruszający przepisy prawa, Administrator
                danych zgodnie z art. 28 ust. 3 pkt h) Rozporządzenia ma prawo kontroli,
                czy środki zastosowane przez Podmiot przetwarzający przy przetwarzaniu i
                zabezpieczeniu powierzonych danych osobowych spełniają postanowienia
                umowy.
              </li>
              <li>
                Podmiot przetwarzający po stwierdzeniu naruszenia ochrony danych osobowych
                bez zbędnej zwłoki zgłasza je Użytkownikowi w ciągu 24 godzin.
              </li>
              <li>
                Podmiot przetwarzający zobowiązuje się do usunięcia uchybień stwierdzonych
                podczas kontroli w terminie wskazanym przez Użytkownika, nie dłuższym niż
                7 dni.
              </li>
              <li>
                Użytkownik zobowiązany jest współdziałać z Podmiotem przetwarzającym przy
                wykonywaniu usług oraz udzielać Administratorowi wyjaśnień w szczególności
                w razie powstania wątpliwości co do zgodności z prawem działań
                Użytkownika.
              </li>
              <li>
                Administrator powierza konkretne czynności (dalej: „Dalsze Powierzenie”)
                innemu podmiotowi przetwarzającemu (dalej: „Dalszy Przetwarzający”) w
                drodze pisemnej umowy dalszego powierzenia przetwarzania danych osobowych
                (dalej: „Umowa Dalszego Powierzenia”). Administrator w ramach świadczenia
                Usług korzysta z Dalszych Przetwarzających zakresie programistycznego
                utrzymania i rozwoju Aplikacji.
              </li>
              <li>
                Dalszy przetwarzający winien spełniać te same gwarancje i obowiązki jakie
                zostały nałożone na Administratora jako Podmiot przetwarzający.
              </li>
              <li>
                Dalszy przetwarzający ponosi pełną odpowiedzialność wobec Administratora
                za nie wywiązanie się ze spoczywających na podwykonawcy obowiązków ochrony
                danych.
              </li>
            </ul>

            <h3 className='text-start'>XI. Postępowanie reklamacyjne</h3>

            <ul role='list' className='list-decimal'>
              <li>
                Użytkownik może zgłaszać Administratorowi reklamacje dotyczące usług
                świadczonych w ramach Aplikacji.
              </li>
              <li>
                Reklamacje można zgłaszać pisemnie, w formie listu poleconego, na adres
                CONETSO Spółka z o.o. Twarda 18, 00-105 Warszawa bądź poprzez wysłanie
                wiadomości na adres email:{' '}
                <PrimaryLink href={`mailto:${siteConfig.complaintsContactMail}`}>
                  {siteConfig.complaintsContactMail}
                </PrimaryLink>
              </li>
              <li>
                Zgłoszenie reklamacji powinno zawierać oznaczenie osoby zgłaszającej
                reklamację (imię, nazwisko, nazwa firmy, adres siedziby, adres email) oraz
                opis zdarzenia będącego przyczyną reklamacji. Jeżeli przekazane w
                reklamacji dane lub informacje wymagają uzupełnienia, przed rozpatrzeniem
                reklamacji Administrator zwraca się do Użytkownika o jej uzupełnienie we
                wskazanym zakresie.
              </li>
              <li>
                Reklamacje zostaną rozpatrzone w terminie nie dłuższym niż 14 dni od daty
                otrzymania przez Administratora prawidłowo złożonej reklamacji
                (zawierającej wymagane elementy i niewymagającej uzupełnienia). W
                przypadkach, gdy reklamacja dotyczyć będzie problemów związanych z
                dostępem Użytkownika do Aplikacji, Administrator podejmie niezwłoczne
                działania w celu umożliwienia Użytkownikowi korzystanie z Aplikacji.
              </li>
              <li>
                Użytkownik otrzyma informację o sposobie rozpatrzenia reklamacji drogą
                korespondencji elektronicznej, na adres email podany w reklamacji.
              </li>
              <li>
                Użytkownikowi nie przysługuje odwołanie od decyzji Administratora wydanej
                w odpowiedzi na złożoną reklamację.
              </li>
            </ul>

            <h3 className='text-start'>XII. Postanowienia końcowe</h3>

            <ul role='list' className='list-decimal'>
              <li>
                O ile strony nie postanowią inaczej, w sprawach nieuregulowanych w
                Regulaminie zastosowanie mają przepisy obowiązującego prawa.
              </li>
              <li>
                Prawem właściwym dla obowiązywania niniejszego Regulaminu i wszelkich
                spraw powstałych na tle jego stosowania jest prawo polskie.
              </li>
              <li>
                Wszelkie spory powstałe w związku ze świadczeniem usług przez
                Administratora na rzecz Użytkownika, jak również powstałe na tle
                obowiązywania niniejszego Regulaminu będą rozstrzygane przez Sąd właściwy
                dla siedziby Administratora.
              </li>
              <li>
                Administrator zastrzega sobie prawo do dokonywania zmian niniejszego
                Regulaminu z ważnych przyczyn, to jest: zmiany przepisów prawa mających
                bezpośredni wpływ na treść Regulaminu; podlegania obowiązkowi prawnemu lub
                regulacyjnemu, zmiany cennika, zmiany zakresu lub formy świadczonych
                usług; dodania nowych usług, zmiany sposobów płatności; oraz aby
                przeciwdziałać nieprzewidzianemu i bezpośredniemu zagrożeniu związanemu z
                ochroną Aplikacji, w tym usług w Aplikacji i Użytkowników przed
                oszustwami, złośliwym oprogramowaniem, spamem, naruszeniem danych lub
                innymi zagrożeniami dla cyberbezpieczeństwa – w zakresie, w jakim te
                zmiany wpływają na realizacje postanowień niniejszego Regulaminu. Zmiana
                cennika nie wpływa na usługi zakupione przez Użytkownika przed jego
                zmianą.
              </li>
              <li>
                Administrator wyśle powiadomienie o zmianie Regulaminu na adres email
                Użytkownika.
              </li>
              <li>
                Zmiany Regulaminu wchodzą nie wcześniej niż 14 od przesłania ich do
                wiadomości Użytkownikom.
              </li>
              <li>
                Załączniki stanowiące integralną część Regulaminu:
                <ul role='list'>
                  <li>
                    <PrimaryLink href='/documents/privacy-policy-pl.pdf'>
                      Załącznik nr 1
                    </PrimaryLink>{' '}
                    - Polityka prywatności/Informacja o ochronie danych osobowych.
                  </li>
                </ul>
              </li>
              <li>Regulamin wchodzi w życie z dniem 23 czerwca 2022 roku.</li>
            </ul>
          </div>
        </div>
      </div>
    </Page>
  );
}
