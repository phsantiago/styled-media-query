'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
  });
  exports.defaultBreakpoints = exports.pxToRem = exports.pxToEm = undefined;

  var _templateObject = _taggedTemplateLiteral(['\n    @media (max-width: ', ') {\n      ', '\n    }\n  '], ['\n    @media (max-width: ', ') {\n      ', '\n    }\n  ']),
      _templateObject2 = _taggedTemplateLiteral(['\n    @media (min-width: ', ') {\n      ', '\n    }\n  '], ['\n    @media (min-width: ', ') {\n      ', '\n    }\n  ']),
          _templateObject3 = _taggedTemplateLiteral(['\n    @media (min-width: ', ') and \n      (max-width: ', ') {\n      ', '\n    }\n  '], ['\n    @media (min-width: ', ') and \n      (max-width: ', ') {\n      ', '\n    }\n  ']),
              _templateObject4 = _taggedTemplateLiteral(['\n          @media (max-width: ', ') {\n            ', '\n          }\n        '], ['\n          @media (max-width: ', ') {\n            ', '\n          }\n        ']),
                  _templateObject5 = _taggedTemplateLiteral(['\n          @media (min-width: ', ') {\n            ', '\n          }\n        '], ['\n          @media (min-width: ', ') {\n            ', '\n          }\n        ']);

                  exports.generateMedia = generateMedia;

                  var _styledComponents = require('styled-components');

                  var _convertors = require('./convertors');

                  function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

                  exports.pxToEm = _convertors.pxToEm;
                  exports.pxToRem = _convertors.pxToRem;

                  /**
                   * Default media breakpoints
                    * @type {Object}
                     */

                     var defaultBreakpoints = exports.defaultBreakpoints = {
                       huge: '1440px',
                         large: '1170px',
                           medium: '768px',
                             small: '450px'
                             };

                             function getSizeFromBreakpoint(breakpointValue) {
                               var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                                 if (breakpoints[breakpointValue]) {
                                     return breakpoints[breakpointValue];
                                       } else if (parseInt(breakpointValue)) {
                                           return breakpointValue;
                                             } else {
                                                 console.error('styled-media-query: No valid breakpoint or size specified for media.');
                                                     return '0';
                                                       }
                                                       }

                                                       /**
                                                        * Media query generator 
                                                         * @param {Object} [defaultBreakpoints] breakpoints - Map labels to breakpoint sizes
                                                          * @return {Object} - Media generators for each breakpoint
                                                           */
                                                           function generateMedia() {
                                                             var breakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBreakpoints;

                                                               var lessThan = function lessThan(breakpoint) {
                                                                   return function () {
                                                                         return (0, _styledComponents.css)(_templateObject, getSizeFromBreakpoint(breakpoint, breakpoints), _styledComponents.css.apply(undefined, arguments));
                                                                             };
                                                                               };

                                                                                 var greaterThan = function greaterThan(breakpoint) {
                                                                                     return function () {
                                                                                           return (0, _styledComponents.css)(_templateObject2, getSizeFromBreakpoint(breakpoint, breakpoints), _styledComponents.css.apply(undefined, arguments));
                                                                                               };
                                                                                                 };

                                                                                                   var between = function between(firstBreakpoint, secondBreakpoint) {
                                                                                                       return function () {
                                                                                                             return (0, _styledComponents.css)(_templateObject3, getSizeFromBreakpoint(firstBreakpoint, breakpoints), getSizeFromBreakpoint(secondBreakpoint, breakpoints), _styledComponents.css.apply(undefined, arguments));
                                                                                                                 };
                                                                                                                   };

                                                                                                                     var oldStyle = Object.keys(breakpoints).reduce(function (acc, label) {
                                                                                                                         var size = breakpoints[label];

                                                                                                                             acc.to[label] = function () {
                                                                                                                                   console.warn('styled-media-query: Use media.lessThan(\'' + label + '\') instead of old media.to.' + label + ' (Probably we\'ll deprecate it)');
                                                                                                                                         return (0, _styledComponents.css)(_templateObject4, size, _styledComponents.css.apply(undefined, arguments));
                                                                                                                                             };

                                                                                                                                                 acc.from[label] = function () {
                                                                                                                                                       console.warn('styled-media-query: Use media.greaterThan(\'' + label + '\') instead of old media.from.' + label + ' (Probably we\'ll deprecate it)');
                                                                                                                                                             return (0, _styledComponents.css)(_templateObject5, size, _styledComponents.css.apply(undefined, arguments));
                                                                                                                                                                 };

                                                                                                                                                                     return acc;
                                                                                                                                                                       }, { to: {}, from: {} });

                                                                                                                                                                         return Object.assign({
                                                                                                                                                                             lessThan: lessThan,
                                                                                                                                                                                 greaterThan: greaterThan,
                                                                                                                                                                                     between: between
                                                                                                                                                                                       }, oldStyle);
                                                                                                                                                                                       }

                                                                                                                                                                                       /**
                                                                                                                                                                                        * Media object with default breakpoints
                                                                                                                                                                                         * @return {object} - Media generators for each size
                                                                                                                                                                                          */
                                                                                                                                                                                          exports.default = generateMedia();

                                                                                                                                                                                          /**
                                                                                                                                                                                           * Usage: styled.div` ${media.from.medium`background: #000;`} `;
                                                                                                                                                                                            * With this code, background for small and medium sizes will be `default` and for more than medium, will be `#000`
                                                                                                                                                                                             */
