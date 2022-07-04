import * as React from 'react';

import Page from '@/components/layout/Page';
import PrimaryLink from '@/components/links/PrimaryLink';
import Seo from '@/components/Seo';

import { siteConfig } from '@/config/site';

export default function PrivacyPolicy() {
  return (
    <Page>
      <Seo title={`${siteConfig.siteName} | Polityka prywatności`} />

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
              <div>
                <h1 className='text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl'>
                  Polityka prywatności
                </h1>
                <p className='text-md pt-2 text-slate-400'>/</p>
                <small className='text-base font-semibold'>
                  Informacja o ochronie danych osobowych
                </small>
              </div>
              <p className='mt-4 text-base leading-7 text-slate-600'>
                Ostatnia aktualizacja 3 lipca 2022 r.
              </p>
            </div>
            <p className='mt-8 text-lg leading-8 text-gray-500'>
              Od 25 maja 2018 r. w Polsce stosowane jest Rozporządzenie Parlamentu
              Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
              ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w
              sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
              (ogólne rozporządzenie o ochronie danych, Dz. Urz. UE L 119, s. 1). Wobec
              powyższego CONETSO Spółka z o.o. z siedzibą w Warszawie, będąca
              Administratorem Aplikacji Offer Exchange, przedstawia następującą informację
              wymaganą Rozporządzeniem i dotyczącą przetwarzania danych osobowych.
            </p>
          </div>
          <div className='prose prose-lg prose-indigo mx-auto mt-10 text-gray-500'>
            <h3 className='text-start'>I. Administrator danych osobowych</h3>

            <p>
              CONETSO Spółka z o.o., ul. Twarda 18, 00-105 Warszawa, zarejestrowana w
              rejestrze przedsiębiorców Krajowego Rejestru Sądowego pod numerem KRS:
              0000923544, NIP: 5252878354, e-mail:{' '}
              <PrimaryLink href={`mailto:${siteConfig.legalContactMail}`}>
                {siteConfig.legalContactMail}
              </PrimaryLink>
              , tel.{' '}
              <PrimaryLink href={`tel:${siteConfig.legalContactPhone}`}>
                {siteConfig.legalContactPhone}
              </PrimaryLink>{' '}
              jest administratorem Twoich danych osobowych. W sprawach dotyczących
              przetwarzania danych osobowych proszę kontaktować się z nami pisemnie na
              adres siedziby Spółki lub drogą elektroniczną na adres e-mail:
              personaldata@offerexchange.net
            </p>

            <p>Przetwarzamy Twoje dane osobowe w następujących celach:</p>
            <ul role='list'>
              <li>
                w celu zawarcia z Tobą i realizacji oraz rozliczenia umowy sprzedaży
                naszych produktów i usług, w tym realizacji ewentualnych roszczeń
                reklamacyjnych, które Ci przysługują (podstawa z art. 6.1.b RODO).
              </li>
              <li>
                w celu informowania o oferowanych przez nas produktach i usługach
                (podstawa z art. 6.1.a RODO).
              </li>
              <li>
                w celach marketingowych, w tym dostosowania struktury witryny
                internetowej/aplikacji do Twoich potrzeb oraz przedstawienia Tobie oferty
                naszych usług i produktów drogą elektroniczną lub telefoniczną, na
                podstawie Twojej zgody oraz zgodnie z naszym prawnie uzasadnionym
                interesem (art. 6.1.a i f RODO).
              </li>
              <li>
                w celu badania satysfakcji klientów i określania jakości naszej obsługi,
                co jest naszym prawnie uzasadnionym interesem (podstawa z art. 6.1.f
                RODO).
              </li>
              <li>
                w celach archiwalnych (dowodowych) dla zabezpieczenia informacji na
                wypadek prawnej potrzeby wykazania faktów, co jest naszym prawnie
                uzasadnionym interesem (podstawa z art. 6.1.f RODO).
              </li>
              <li>
                w celu ewentualnego ustalenia, dochodzenia lub obrony przed roszczeniami,
                co jest naszym prawnie uzasadnionym interesem (podstawa z art. 6.1.f
                RODO).
              </li>
            </ul>

            <h3 className='text-start'>
              II. Narzędzia zbierania danych na stronie www oraz kategorie Twoich danych,
              które przetwarzamy
            </h3>

            <ul role='list' className='list-decimal'>
              <li>
                W celu kontaktu z klientem i przesłania zapytania wykorzystywany jest
                Formularz kontaktowy:
                <ul role='list'>
                  <li>
                    dane osobowe, które są przekazywane poprzez formularze kontaktowe to:
                    imię, nazwisko, nazwa firmy, adres e-mail, adres dostawy zamówienia.
                  </li>
                </ul>
              </li>
              <li>
                W celu dostosowania struktury witryny internetowej oraz realizacji
                pozostałych celów marketingowych korzystamy z następujących narzędzi
                zbierania danych:
                <ul role='list'>
                  <li>Google Analytics</li>
                  <li>wtyczka społecznościowa Facebook</li>
                </ul>
                <ul role='list' className='list-decimal'>
                  <li>
                    Powyższe narzędzia śledzą aktywność użytkowników w witrynach i
                    serwisach internetowych poprzez pliki cookies i ID użytkowników.
                  </li>
                  <li>
                    Poprzez wyżej wskazane narzędzia gromadzone są takie dane
                    statystyczne.Służą one w celu dostosowania przekazu reklamowego do
                    potrzeb użytkowników.{' '}
                    <strong>
                      Informacje są przechowywane w poszczególnych narzędziach w formie
                      zbiorczych (anonimowych) danych statystycznych.
                    </strong>
                  </li>
                  <li>
                    Użytkownik może edytować te dane przy użyciu indywidualnych ustawień
                    na kontach Google oraz w swojej przeglądarce internetowej.
                  </li>
                  <li>
                    Zabezpieczamy te dane poprzez ograniczenie dostępu do narzędzi, w
                    których są przechowywanie wyłącznie dla osób upoważnionych oraz
                    zahasłowanie kont w ramach poszczególnych narzędzi.
                  </li>
                  <li>
                    Na naszej stronie zainstalowana jest wtyczka społecznościowa Facebook.
                    Aplikacje internetowe Facebook wykorzystują pliki cookie w celu
                    usprawnienia działania swoich usług. Więcej na temat polityki
                    prywatności Facebook -{' '}
                    <PrimaryLink href='https://www.facebook.com/privacy/explanation'>
                      https://www.facebook.com/privacy/explanation
                    </PrimaryLink>
                  </li>
                  <li>
                    Wykorzystujemy narzędzie Google Analytics do analizy ruchu
                    internetowego w naszym serwisie www. Firma Google gromadzi informacje
                    o odwiedzinach w serwisach internetowych korzystających z usług tego
                    samego rodzaju. Polityka prywatności Google –{' '}
                    <PrimaryLink href='https://privacy.google.com'>
                      https://privacy.google.com
                    </PrimaryLink>
                  </li>
                </ul>
              </li>
            </ul>

            <h3 className='text-start'>III. Odbiorcy danych</h3>

            <p>
              Twoje dane osobowe możemy udostępniać następującym kategoriom podmiotów:
              podwykonawcom, czyli podmiotom, z których korzystamy przy ich przetwarzaniu,
              takim jak:
            </p>
            <ul role='list'>
              <li>
                firma informatyczna, z której usług korzystamy w związku z utrzymaniem
                serwera
              </li>
              <li>firmy, które na nasze zlecenie prowadzą działania marketingowe</li>
              <li>
                kancelaria prawna, z której usług korzystamy w celach dochodzenia
                roszczeń, czy rozstrzyganiu ewentualnych sporów
              </li>
              <li>podmiot prowadzący obsługę księgową i kadrową naszej firmy</li>
            </ul>

            <h3 className='text-start'>
              IV. Przekazywanie danych do państw trzecich lub organizacji międzynarodowych
            </h3>

            <p>
              Nie przekazujemy Twoich danych poza teren Polski/UE/Europejskiego Obszaru
              Gospodarczego.
            </p>

            <h3 className='text-start'>V. Okres przechowywania danych</h3>

            <p>Zgodnie z art. 13.2.a i 14.2.a RODO informujemy, iż: </p>

            <ul role='list' className='list-decimal'>
              <li>
                Twoje dane pozyskane w celu zawarcia i realizacji umowy sprzedaży naszych
                towarów lub usług przechowujemy i przetwarzamy przez okres trwania umowy
                aż do końca okresu przedawnienia potencjalnych roszczeń z tytułu zawartych
                umów.
              </li>
              <li>
                Twoje podstawowe dane kontaktowe przechowujemy dla potrzeb marketingu
                bezpośredniego naszych produktów i usług do czasu, aż zgłosisz sprzeciw
                względem ich przetwarzania w tym celu, cofniesz zgodę, jeśli
                przetwarzaliśmy je na podstawie tzw. zgody marketingowej, lub sami
                ustalimy, że się zdezaktualizowały.
              </li>
            </ul>

            <h3 className='text-start'>VI. Twoje prawa</h3>

            <p>Zgodnie z postanowieniami RODO, przysługuje Ci:</p>

            <ul role='list'>
              <li className='font-semibold'>
                prawo dostępu do swoich danych oraz otrzymania ich kopii
              </li>
              <li className='font-semibold'>
                prawo do sprostowania (poprawiania) swoich danych
              </li>
              <li className='font-semibold'>
                prawo do usunięcia danych:
                <p className='-mt-0.5 font-normal'>
                  Jeżeli Twoim zdaniem nie ma podstaw do tego, abyśmy przetwarzali Twoje
                  dane osobowe, możesz zażądać, abyśmy je usunęli.
                </p>
              </li>
              <li className='font-semibold'>
                ograniczenia przetwarzania danych:
                <p className='-mt-0.5 font-normal'>
                  Możesz zażądać, abyśmy ograniczyli przetwarzanie Twoich danych osobowych
                  wyłącznie do ich przechowywania lub wykonywania uzgodnionych z Tobą
                  działań, jeżeli Twoim zdaniem mamy nieprawidłowe dane na Twój temat lub
                  przetwarzamy je bezpodstawnie; lub nie chcesz, żebyśmy je usunęli, bo są
                  potrzebne do ustalenia, dochodzenia lub obrony roszczeń; lub na czas
                  wniesionego przez Ciebie sprzeciwu względem przetwarzania danych.
                </p>
              </li>
              <li className='font-semibold'>
                prawo do wniesienia sprzeciwu wobec przetwarzania danych – sprzeciw
                „marketingowy”
                <p className='-mt-0.5 font-normal'>
                  Masz prawo sprzeciwu wobec przetwarzania Twoich danych w celu
                  prowadzenia marketingu bezpośredniego. Jeżeli skorzystasz z tego prawa –
                  zaprzestaniemy przetwarzania danych w tym celu.
                </p>
              </li>
              <li className='font-semibold'>prawo do przenoszenia danych</li>
              <li>
                <span className='font-semibold'>
                  prawo do wniesienia skargi do organu nadzorczego,
                </span>{' '}
                którym jest Prezes Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193
                Warszawa
              </li>
              <li className='font-semibold'>
                prawo do cofnięcia zgody na przetwarzanie danych osobowych:
                <p className='-mt-0.5 font-normal'>
                  W każdej chwili masz prawo cofnąć zgodę na przetwarzanie tych danych
                  osobowych, które przetwarzamy na podstawie Twojej zgody. Cofnięcie zgody
                  nie będzie wpływać na zgodność z prawem przetwarzania, którego dokonano
                  na podstawie Twojej zgody przed jej wycofaniem. W celu wykonania swoich
                  praw skieruj żądanie drogą listowną pod adres ul. Twarda 18, 00-105
                  Warszawa lub drogą elektroniczną na adres e-mail:{' '}
                  <PrimaryLink href={`mailto:${siteConfig.rodoContactMail}`}>
                    {siteConfig.rodoContactMail}
                  </PrimaryLink>{' '}
                  Pamiętaj, przed realizacją Twoich uprawnień będziemy się musieli
                  upewnić, że Ty to Ty, czyli odpowiednio Cię zidentyfikować.
                </p>
              </li>
            </ul>

            <h2>Informacja o Cookies</h2>

            <h3 className='text-start'>I. Co to są pliki „cookies”?</h3>
            <p>
              Pliki „cookies” używane są w celu dostosowania zawartości stron
              internetowych do preferencji i oczekiwań użytkownika oraz optymalizacji
              korzystania ze stron internetowych. Używane są również w celu tworzenia
              anonimowych, zagregowanych statystyk, które pomagają zrozumieć w jaki sposób
              użytkownik korzysta ze stron internetowych co umożliwia ulepszanie ich
              struktury i zawartości, z wyłączeniem personalnej identyfikacji użytkownika.{' '}
              <strong>
                Dzięki plikom ,,cookies’’ sprawdzamy wydajność, analizujemy i badamy jak
                działają nasze strony internetowe
              </strong>{' '}
              tworząc anonimowe statystyki, co umożliwia ulepszanie ich struktury i
              zawartości.
            </p>

            <h3 className='text-start'>II. Jak przetwarzamy pliki „cookies”?</h3>
            <p>
              Administrator przetwarza dane zawarte w plikach „cookies” podczas
              korzystania przez odwiedzających ze strony w następujących celach:
            </p>
            <ul role='list'>
              <li>
                zapamiętywania danych z wypełnianych formularzy kontaktu oraz rekrutacji.
              </li>
              <li>
                prowadzenia anonimowych statystyk przedstawiających sposób korzystania z
                serwisu internetowego.
              </li>
              <li>
                dostosowywania zawartości serwisu internetowego do indywidualnych
                preferencji użytkownika.
              </li>
              <li>
                zapamiętywania wyboru użytkownika w zakresie zgody (lub nie) na
                przetwarzanie danych osobowych użytkownika.
              </li>
            </ul>

            <h3 className='text-start'>III. Dlaczego przechowujemy pliki „cookies”?</h3>
            <p>
              “Cookies” przechowywane są przez zdefiniowany czas, który określany jest
              przez parametr zawarty w pliku “cookie”. Użytkownik może włączyć lub
              wyłączyć obsługę plików cookie w ustawieniach przeglądarki internetowej z
              której korzysta. Może również na bieżąco czyścić (usuwać) pliki cookies ze
              swojego urządzenia korzystając z opcji „czyszczenia danych użytkownika”
              (pamięć podręczna, pliki cookies, historia, .itd), które udostępnia każda z
              przeglądarek internetowych. Korzystanie z „trybu prywatnego” w programach do
              przeglądania stron internetowych również blokuje zapisywanie się
              „ciasteczek” na urządzeniu użytkownika. Przeglądarki internetowe domyślnie
              dopuszczają zapisywanie plików “cookies” na urządzeniu końcowym. Użytkownik
              może dokonać właściwej konfiguracji przeglądarki, aby zablokować
              automatyczne akceptowanie plików “cookies” lub uzyskać każdorazową
              informację o przesłaniu pliku na urządzenie użytkownika. Właściwe informacje
              o obsłudze plików “cookies” oraz możliwych konfiguracjach dostępne są w
              ustawieniach przeglądarki.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
