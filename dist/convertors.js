'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
  });
  exports.pxToEm = pxToEm;
  exports.pxToRem = pxToRem;
  /**
   * Converts breakpoint units in px to rem or em
    * @param {Object} breakpoints - an object containing breakpoint names as keys and the width as value
     * @param {number} [16] ratio - size of 1 rem in px. What is your main font-size in px? 
      * @param {'rem' | 'em'} unit
       */
       function pxToEmOrRem(breakpoints) {
         var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
           var unit = arguments[2];

             var newBreakpoints = {};

               for (var key in breakpoints) {
                   var point = breakpoints[key];

                       if (String(point).includes('px')) {
                             newBreakpoints[key] = +(parseInt(point) / ratio) + unit;
                                   continue;
                                       }

                                           newBreakpoints[key] = point;
                                             }

                                               return newBreakpoints;
                                               }

                                               /**
                                                * Converts breakpoint units in px to em 
                                                 * @param {Object} breakpoints - an object containing breakpoint names as keys and the width as value
                                                  * @param {number} [16] ratio - size of 1em in px. What is your main font-size in px? 
                                                   */
                                                   function pxToEm(breakpoints) {
                                                     var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;

                                                       return pxToEmOrRem(breakpoints, ratio, 'em');
                                                       }

                                                       /**
                                                        * Converts breakpoint units in px to rem 
                                                         * @param {Object} breakpoints - an object containing breakpoint names as keys and the width as value
                                                          * @param {number} [16] ratio - size of 1rem in px. What is your main font-size in px? 
                                                           */
                                                           function pxToRem(breakpoints) {
                                                             var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;

                                                               return pxToEmOrRem(breakpoints, ratio, 'rem');
                                                               }
