(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{3138:function(module,exports){module.exports=function(hljs){var QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',contains:[hljs.BACKSLASH_ESCAPE]},SINGLE_QUOTE_CHAR_MODE={className:"string",begin:"'",end:"'",contains:[hljs.BACKSLASH_ESCAPE],relevance:0},TYPE_NAME={className:"type",begin:"\\b_?[A-Z][\\w]*",relevance:0},PRIMED_NAME={begin:hljs.IDENT_RE+"'",relevance:0};return{keywords:{keyword:"actor addressof and as be break class compile_error compile_intrinsicconsume continue delegate digestof do else elseif embed end errorfor fun if ifdef in interface is isnt lambda let match new not objector primitive recover repeat return struct then trait try type until use var where while with xor",meta:"iso val tag trn box ref",literal:"this false true"},contains:[{className:"class",beginKeywords:"class actor",end:"$",contains:[hljs.TITLE_MODE,hljs.C_LINE_COMMENT_MODE]},{className:"function",beginKeywords:"new fun",end:"=>",contains:[hljs.TITLE_MODE,{begin:/\(/,end:/\)/,contains:[TYPE_NAME,PRIMED_NAME,hljs.C_NUMBER_MODE,hljs.C_BLOCK_COMMENT_MODE]},{begin:/:/,endsWithParent:!0,contains:[TYPE_NAME]},hljs.C_LINE_COMMENT_MODE]},TYPE_NAME,{className:"string",begin:'"""',end:'"""',relevance:10},QUOTE_STRING_MODE,SINGLE_QUOTE_CHAR_MODE,PRIMED_NAME,hljs.C_NUMBER_MODE,hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE]}}}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_highlight_pony.30c2bd53e151405554db.bundle.js.map