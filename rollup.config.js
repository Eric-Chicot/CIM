import {terser} from 'rollup-plugin-terser';

export default{
  input:'src/main.js',
  output:[
    {
      file:'build/cim.js',
      format:'iife',
      name:'CIM'
    },
    /*
    {
      file:'build/cim_cfs.js',
      format:'cjs'
    },
    */
    {
      file:'build/cim.min.js',
      format:'iife',
      name:'CIM',
      plugins:[terser()]
    }
  ]
};
