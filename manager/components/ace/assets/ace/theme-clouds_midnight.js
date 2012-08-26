define("ace/theme/clouds_midnight",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-clouds-midnight",t.cssText="\n.ace-clouds-midnight .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-clouds-midnight .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-clouds-midnight .ace_gutter {\n  background: #232323;\n  color: #929292;\n}\n\n.ace-clouds-midnight .ace_print_margin {\n  width: 1px;\n  background: #232323;\n}\n\n.ace-clouds-midnight .ace_scroller {\n  background-color: #191919;\n}\n\n.ace-clouds-midnight .ace_text-layer {\n  color: #929292;\n}\n\n.ace-clouds-midnight .ace_cursor {\n  border-left: 2px solid #7DA5DC;\n}\n\n.ace-clouds-midnight .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid #7DA5DC;\n}\n\n.ace-clouds-midnight .ace_marker-layer .ace_selection {\n  background: #000000;\n}\n\n.ace-clouds-midnight.multiselect .ace_selection.start {\n  box-shadow: 0 0 3px 0px #191919;\n  border-radius: 2px;\n}\n\n.ace-clouds-midnight .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0);\n}\n\n.ace-clouds-midnight .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #BFBFBF;\n}\n\n.ace-clouds-midnight .ace_marker-layer .ace_active_line {\n  background: rgba(215, 215, 215, 0.031);\n}\n\n.ace-clouds-midnight .ace_gutter_active_line {\n  background-color: rgba(215, 215, 215, 0.031);\n}\n\n.ace-clouds-midnight .ace_marker-layer .ace_selected_word {\n  border: 1px solid #000000;\n}\n\n.ace-clouds-midnight .ace_invisible {\n  color: #BFBFBF;\n}\n\n.ace-clouds-midnight .ace_keyword, .ace-clouds-midnight .ace_meta {\n  color:#927C5D;\n}\n\n.ace-clouds-midnight .ace_keyword.ace_operator {\n  color:#4B4B4B;\n}\n\n.ace-clouds-midnight .ace_constant.ace_language {\n  color:#39946A;\n}\n\n.ace-clouds-midnight .ace_constant.ace_numeric {\n  color:#46A609;\n}\n\n.ace-clouds-midnight .ace_invalid {\n  color:#FFFFFF;\nbackground-color:#E92E2E;\n}\n\n.ace-clouds-midnight .ace_fold {\n    background-color: #927C5D;\n    border-color: #929292;\n}\n\n.ace-clouds-midnight .ace_support.ace_function {\n  color:#E92E2E;\n}\n\n.ace-clouds-midnight .ace_storage {\n  color:#E92E2E;\n}\n\n.ace-clouds-midnight .ace_string {\n  color:#5D90CD;\n}\n\n.ace-clouds-midnight .ace_comment {\n  color:#3C403B;\n}\n\n.ace-clouds-midnight .ace_entity.ace_other.ace_attribute-name {\n  color:#606060;\n}\n\n.ace-clouds-midnight .ace_markup.ace_underline {\n    text-decoration:underline;\n}\n\n.ace-clouds-midnight .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWOQlJT8z1BeXv4fAA2KA6+h9Z+2AAAAAElFTkSuQmCC) right repeat-y;\n}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})