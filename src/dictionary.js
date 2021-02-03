import { cim_fr } from './cim_fr.js';
import { cim_en } from './cim_en.js';

export function dictionary(intl){ 
 if(intl=="fr") return cim_fr;
 if(intl=="en") return cim_en;
 return cim_en;
}
