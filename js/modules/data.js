async function loadJSON(url)
{
    const response = await fetch(url);
    if (!response.ok)
        throw new Error(`Failed to load JSON from ${url}`);
    return response.json();
}

const o_json = await loadJSON('./pyscraper/JSON/o_map.json');
const s_json = await loadJSON('./pyscraper/JSON/s_map.json');
const n_json = await loadJSON('./pyscraper/JSON/n_map.json');
const initials_name_dict = await loadJSON('./pyscraper/JSON/initials_name_dict.json');

export const ospanTexts = Object.keys(o_json);
export const ofilenames = Object.values(o_json).map(value => `${value}.html`);
export const sspanTexts = Object.keys(s_json).map(key => /^\d{2}$/.test(key) ? `s${key}` : key);
export const sfilenames = Object.values(s_json).map(value => `${value}.html`);
export const nspanTexts = Object.keys(n_json).map(key => `${initials_name_dict[key]} (${key})`);
export const nfilenames = Object.values(n_json).map(value => `${value}.html`);

export const wordsToAddSpace = ['Język', 'Rysunek', 'Pracownia', 'Tworzenie', 'aplikacji', 'Biznes', 'Zajęcia', 'Systemy', 'Wychowanie', 'Programowanie', 'baz', 'programowania', 'Projektowanie', 'Eksploatacja', 'handlowa', 'Działalność', 'usługowa', 'Testowanie', 'dokumentowanie', 'Technika', 'ruchu', 'projektowania', 'danych', 'Historia', 'fizyczne', 'internetowych', 'Informatyka', 'obiektowego','angielski', 'Podstawy', 'hiszpański', 'niemiecki', 'Elektrotechnika', 'Urządzenia', 'instalacje', 'urządzeń', 'montażu', 'Układy', 'elektryczne', 'elektryczna', 'Bezpieczeństwo', 'higiena', 'techniki', 'systemów', 'sieci', 'witryn', 'Edukacja', 'dla', 'podstaw', 'utrzymania', 'Pomiary', 'Sieci', 'podstacje', 'trakcyjne', 'elektroniczne', 'instalacji', 'Maszyny', 'urządzenia', 'testowania', 'dokumentowania', 'Kompetencje', 'Witryny', 'aplikacje', 'automatyki', 'Technologie', 'pomiary', 'DSDI', 'Instalacje', 'Wiedza', 'społeczeństwie', 'Przygotowanie', 'praktyczne', 'zawodu', 'maszynisty', 'Organizacja', 'przewozów', 'kolejowych', 'Odprawa', 'pociągów', 'stacji', 'DSD', 'Infrastruktura', 'komputerowe', 'technologii', 'pomiarów', 'sterowania', 'ruchem', 'Bazy', 'Kolejowe', 'pojazdy', 'taboru', 'Tabor', 'elektrycznych', 'pojazdów', 'eksploatacji', 'środków', 'transportu', 'organizacji', 'pracy'];
export const wordsToAddSpaceAfterFirstCharacter = ['zwychowawcą', 'izarządzanie', 'iurządzeń', 'idokumentowanie', 'ielektronika', 'ielektroniczna', 'iinstalacje', 'ihigiena', 'ielektroniczne', 'iutrzymania', 'ipodstacje', 'iurządzenia', 'idokumentowania', 'iaplikacje', 'wautomatyce', 'ipomiary', 'ospołeczeństwie', 'ipomiarów'];
export const wordsToAddSpaceAfterSecondCharacter = ['dozawodu', 'nastacji'];