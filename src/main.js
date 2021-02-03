import { dictionary } from './dictionary.js';

const CIM={};
var lang="fr";			/* Langue pour le dictionnaire */
var LIMIT_DIGIT=10;		/* Les intervalles correspondent aux 10 notes entre l'octave et la fondamentale */
var LIMIT_NUMBER=2047;		/* 2047 est la totalité de combinaison d'intervalles */
var LIMIT_POW=10;		/* Puissance de 10 */


CIM.getBinary=function(arg){
  var result=new Array();
  var num=getLimitNumber(arg);
  for(var i=0; i <= LIMIT_DIGIT;i++){
    result[LIMIT_DIGIT - i]=moduloByte((num>>i));
  }
  return result;
};

CIM.getNumber=function(arg){
  var num=0;
  var pow=0;
  for(var i = arg.length -1; i > -1; i--){
    if(arg[i] == 1) num+=Math.pow(2,pow);
    pow++;
  }
  return num;
};

CIM.getName=function(arg){
  return cim[arg];
};

CIM.isScale=function(arg){
  return (cim[arg].scale != null)?true:false;
}

CIM.isMode=function(arg){
  return (cim[arg].mode != null)?true:false;
}

CIM.isAscending=function(arg){
  return (cim[arg].ascending != null)?true:false;
}

CIM.isDescending=function(arg){
  return (cim[arg].descending != null)?true:false;
}

CIM.isChord=function(arg){
  return (cim[arg].chord != null)?true:false;
}
CIM.isRaga=function(arg){
  return (cim[arg].raga != null)?true:false;
}

CIM.setLanguage=function(arg){
  lang=arg;
  cim=dictionary(lang);
};

CIM.getLanguage=function(){
  return lang;
};

function moduloByte(num){
  return (num % 2);
}

function getLimitNumber(num){
  return (num <= LIMIT_NUMBER)? num : 0;
}

var cim=dictionary(lang);

export default CIM;
