import { Prata, Inter, Lora, Source_Sans_3, Ms_Madi, Playfair_Display, Montserrat, Great_Vibes, Lobster_Two, Marcellus, Righteous, Special_Elite, Berkshire_Swash, Glory, Meow_Script, Philosopher, Noto_Serif, Dawning_of_a_New_Day, Vidaloka, Baskervville, Petit_Formal_Script, Jost, EB_Garamond, Mate_SC, Corinthia, Petemoss, Puppies_Play, Oregano, Allison, Style_Script, Allura, Pinyon_Script, Imperial_Script, Fleur_De_Leah } from 'next/font/google';

const lora = Lora({ subsets: ['latin'] });
const msMadi = Ms_Madi({ weight: '400', subsets: ['latin'] });
const playFair = Playfair_Display({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
const prata = Prata({ weight: '400', subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });
const greatvibes = Great_Vibes({ weight: '400', subsets: ['latin'] });
const lobsterTwo = Lobster_Two({ weight: '400', subsets: ['latin'] });
const marcellus = Marcellus({ weight: '400', subsets: ['latin'] });
const righteous = Righteous({ weight: '400', subsets: ['latin'] });
const specialElite = Special_Elite({ weight: '400', subsets: ['latin'] });
const berkshireSwash = Berkshire_Swash({ weight: '400', subsets: ['latin'] });
const glory = Glory({ weight: '400', subsets: ['latin'] });
const meowScript = Meow_Script({ weight: '400', subsets: ['latin'] });
const philosopher = Philosopher({ weight: '400', subsets: ['latin'] });
const notoSerif = Noto_Serif({ weight: '400', subsets: ['latin'] });
const dawningOfDay = Dawning_of_a_New_Day({ weight: '400', subsets: ['latin'] });
const vidaloka = Vidaloka({ weight: '400', subsets: ['latin'] });
const baskervville = Baskervville({ weight: '400', subsets: ['latin'] });
const petitFormal = Petit_Formal_Script({ weight: '400', subsets: ['latin'] });
const jost = Jost({ weight: '400', subsets: ['latin'] });
const garamond = EB_Garamond({ weight: '400', subsets: ['latin'] });
const mate = Mate_SC({ weight: '400', subsets: ['latin'] });
const corinthia = Corinthia({ weight: ['400', '700'], subsets: ['latin'] });
const petemoss = Petemoss({ weight: ['400'], subsets: ['latin'] });
const puppies = Puppies_Play({ weight: ['400'], subsets: ['latin'] });
const oregano = Oregano({ weight: ['400'], subsets: ['latin'] });
const allison = Allison({ weight: ['400'], subsets: ['latin'] });
const styleScript = Style_Script({ weight: ['400'], subsets: ['latin'] });
const allura = Allura({ weight: ['400'], subsets: ['latin'] });
const pinyonScript = Pinyon_Script({ weight: ['400'], subsets: ['latin'] });
const imperialScript = Imperial_Script({ weight: ['400'], subsets: ['latin'] });
const fleurdeleah = Fleur_De_Leah({ weight: ['400'], subsets: ['latin'] });

const fontFamilySet = (item: string): string => {

  let fontSelection;

  switch (item) {
    
    case 'fleurDeLeah':
      fontSelection = fleurdeleah.className;
    break;
    case 'imperialScript':
      fontSelection = imperialScript.className;
    break;
    case 'pinyonScript':
      fontSelection = pinyonScript.className;
    break;
    case 'allura':
      fontSelection = allura.className;
    break;
    case 'styleScript':
      fontSelection = styleScript.className;
    break;
    case 'allison':
      fontSelection = allison.className;
    break;
    case 'oregano':
      fontSelection = oregano.className;
    break;
    case 'petemoss':
      fontSelection = petemoss.className;
    break;
    case 'puppies':
      fontSelection = puppies.className;
    break;
    case 'garamond':
      fontSelection = garamond.className;
    break;
    case 'corinthia':
      fontSelection = corinthia.className;
    break;
    case 'mate':
      fontSelection = mate.className;
    break;
    case 'jost':
      fontSelection = jost.className;
    break;
    case 'petitFormal':
      fontSelection = petitFormal.className;
    break;
    case 'baskervville':
      fontSelection = baskervville.className;
    break;
    case 'vidaloka':
      fontSelection = vidaloka.className;
    break;
    case 'dawningOfDay':
      fontSelection = dawningOfDay.className;
    break;
    case 'notoSerif':
      fontSelection = notoSerif.className;
    break;
    case 'lora':
      fontSelection = lora.className;
      break;
    case 'prata':
      fontSelection = prata.className;
      break;
    case 'inter':
      fontSelection = inter.className;
      break;
    case 'msMadi':
      fontSelection = msMadi.className;
      break;
    case 'playFair':
      fontSelection = playFair.className;
      break;
    case 'sourceSans':
      fontSelection = sourceSans.className;
      break;
    case 'greatVibes':
      fontSelection = greatvibes.className;
      break;
    case 'lobsterTwo':
        fontSelection = lobsterTwo.className;
        break;
    case 'marcellus':
      fontSelection = marcellus.className;
      break;
    case 'righteous':
      fontSelection = righteous.className;
      break;
    case 'specialElite':
      fontSelection = specialElite.className;
      break;
    case 'berkshireSwash':
      fontSelection = berkshireSwash.className;
      break;
    case 'glory':
      fontSelection = glory.className;
      break;
    case 'meowScript':
      fontSelection = meowScript.className;
      break;
    case 'philosopher':
      fontSelection = philosopher.className;
    break;
      
    default:
      fontSelection = montserrat.className;
  }

  return fontSelection;

};


export default fontFamilySet;