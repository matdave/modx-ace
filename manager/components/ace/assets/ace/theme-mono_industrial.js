define("ace/theme/mono_industrial",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-mono-industrial",t.cssText="\n.ace-mono-industrial .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-mono-industrial .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-mono-industrial .ace_gutter {\n  background: #1d2521;\n  color: #C5C9C9;\n}\n\n.ace-mono-industrial .ace_print_margin {\n  width: 1px;\n  background: #555651;\n}\n\n.ace-mono-industrial .ace_scroller {\n  background-color: #222C28;\n}\n\n.ace-mono-industrial .ace_text-layer {\n  color: #FFFFFF;\n}\n\n.ace-mono-industrial .ace_cursor {\n  border-left: 2px solid #FFFFFF;\n}\n\n.ace-mono-industrial .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid #FFFFFF;\n}\n\n.ace-mono-industrial .ace_marker-layer .ace_selection {\n  background: rgba(145, 153, 148, 0.40);\n}\n\n.ace-mono-industrial.multiselect .ace_selection.start {\n  box-shadow: 0 0 3px 0px #222C28;\n  border-radius: 2px;\n}\n\n.ace-mono-industrial .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0);\n}\n\n.ace-mono-industrial .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(102, 108, 104, 0.50);\n}\n\n.ace-mono-industrial .ace_marker-layer .ace_active_line {\n  background: rgba(12, 13, 12, 0.25);\n}\n\n.ace-mono-industrial .ace_gutter_active_line {\n  background-color: rgba(12, 13, 12, 0.25);\n}\n\n.ace-mono-industrial .ace_marker-layer .ace_selected_word {\n  border: 1px solid rgba(145, 153, 148, 0.40);\n}\n\n.ace-mono-industrial .ace_invisible {\n  color: rgba(102, 108, 104, 0.50);\n}\n\n.ace-mono-industrial .ace_keyword, .ace-mono-industrial .ace_meta {\n  color:#A39E64;\n}\n\n.ace-mono-industrial .ace_keyword.ace_operator {\n  color:#A8B3AB;\n}\n\n.ace-mono-industrial .ace_constant, .ace-mono-industrial .ace_constant.ace_other {\n  color:#E98800;\n}\n\n.ace-mono-industrial .ace_constant.ace_character,  {\n  color:#E98800;\n}\n\n.ace-mono-industrial .ace_constant.ace_character.ace_escape,  {\n  color:#E98800;\n}\n\n.ace-mono-industrial .ace_constant.ace_numeric {\n  color:#E98800;\n}\n\n.ace-mono-industrial .ace_invalid {\n  color:#FFFFFF;\nbackground-color:rgba(153, 0, 0, 0.68);\n}\n\n.ace-mono-industrial .ace_support.ace_constant {\n  color:#C87500;\n}\n\n.ace-mono-industrial .ace_fold {\n    background-color: #A8B3AB;\n    border-color: #FFFFFF;\n}\n\n.ace-mono-industrial .ace_support.ace_function {\n  color:#588E60;\n}\n\n.ace-mono-industrial .ace_storage {\n  color:#C23B00;\n}\n\n.ace-mono-industrial .ace_variable {\n  color:#A8B3AB;\n}\n\n.ace-mono-industrial .ace_variable.ace_parameter {\n  color:#648BD2;\n}\n\n.ace-mono-industrial .ace_comment {\n  color:#666C68;\nbackground-color:#151C19;\n}\n\n.ace-mono-industrial .ace_variable.ace_language {\n  color:#648BD2;\n}\n\n.ace-mono-industrial .ace_entity.ace_other.ace_attribute-name {\n  color:#909993;\n}\n\n.ace-mono-industrial .ace_entity.ace_name {\n  color:#5778B6;\n}\n\n.ace-mono-industrial .ace_entity.ace_name.ace_function {\n  color:#A8B3AB;\n}\n\n.ace-mono-industrial .ace_markup.ace_underline {\n    text-decoration:underline;\n}\n\n.ace-mono-industrial .ace_indent-guide {\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQ0tH4zzBz5sz/ABAOBECKH+evAAAAAElFTkSuQmCC) right repeat-y;\n}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})