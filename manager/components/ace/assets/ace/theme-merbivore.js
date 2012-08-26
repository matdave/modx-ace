define("ace/theme/merbivore",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-merbivore",t.cssText="\n.ace-merbivore .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-merbivore .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-merbivore .ace_gutter {\n  background: #202020;\n  color: #E6E1DC;\n}\n\n.ace-merbivore .ace_print_margin {\n  width: 1px;\n  background: #555651;\n}\n\n.ace-merbivore .ace_scroller {\n  background-color: #161616;\n}\n\n.ace-merbivore .ace_text-layer {\n  color: #E6E1DC;\n}\n\n.ace-merbivore .ace_cursor {\n  border-left: 2px solid #FFFFFF;\n}\n\n.ace-merbivore .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid #FFFFFF;\n}\n\n.ace-merbivore .ace_marker-layer .ace_selection {\n  background: #454545;\n}\n\n.ace-merbivore.multiselect .ace_selection.start {\n  box-shadow: 0 0 3px 0px #161616;\n  border-radius: 2px;\n}\n\n.ace-merbivore .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0);\n}\n\n.ace-merbivore .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #404040;\n}\n\n.ace-merbivore .ace_marker-layer .ace_active_line {\n  background: #333435;\n}\n\n.ace-merbivore .ace_gutter_active_line {\n  background-color : #333435;\n}\n\n.ace-merbivore .ace_marker-layer .ace_selected_word {\n  border: 1px solid #454545;\n}\n\n.ace-merbivore .ace_invisible {\n  color: #404040;\n}\n\n.ace-merbivore .ace_keyword, .ace-merbivore .ace_meta {\n  color:#FC6F09;\n}\n\n.ace-merbivore .ace_constant, .ace-merbivore .ace_constant.ace_other {\n  color:#1EDAFB;\n}\n\n.ace-merbivore .ace_constant.ace_character,  {\n  color:#1EDAFB;\n}\n\n.ace-merbivore .ace_constant.ace_character.ace_escape,  {\n  color:#1EDAFB;\n}\n\n.ace-merbivore .ace_constant.ace_language {\n  color:#FDC251;\n}\n\n.ace-merbivore .ace_constant.ace_library {\n  color:#8DFF0A;\n}\n\n.ace-merbivore .ace_constant.ace_numeric {\n  color:#58C554;\n}\n\n.ace-merbivore .ace_invalid {\n  color:#FFFFFF;\nbackground-color:#990000;\n}\n\n.ace-merbivore .ace_support.ace_constant {\n  color:#8DFF0A;\n}\n\n.ace-merbivore .ace_fold {\n    background-color: #FC6F09;\n    border-color: #E6E1DC;\n}\n\n.ace-merbivore .ace_support.ace_function {\n  color:#FC6F09;\n}\n\n.ace-merbivore .ace_storage {\n  color:#FC6F09;\n}\n\n.ace-merbivore .ace_string {\n  color:#8DFF0A;\n}\n\n.ace-merbivore .ace_comment {\n  font-style:italic;\ncolor:#AD2EA4;\n}\n\n.ace-merbivore .ace_meta.ace_tag {\n  color:#FC6F09;\n}\n\n.ace-merbivore .ace_entity.ace_other.ace_attribute-name {\n  color:#FFFF89;\n}\n\n.ace-merbivore .ace_markup.ace_underline {\n    text-decoration:underline;\n}\n\n.ace-merbivore .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMQExP7zzBz5sz/AA50BAyDznYhAAAAAElFTkSuQmCC) right repeat-y;\n}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})