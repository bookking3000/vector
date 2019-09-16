import Interactive from '../../Interactive.js';
import { getScriptName } from '../../Util.js';
import DropdownControl from '../../elements/DropdownControl.js';

let interactive = new Interactive(getScriptName());
interactive.width = 768;
interactive.height = 300;
interactive.root.style.border = "1px solid grey";

let dropdown = interactive.dropdownControl(20, 60, ["red", "blue", "white", "purple"], 1);
let circle = interactive.circle(450, 100, 30);

circle.addDependency(dropdown);
circle.update = function(){
    circle.style.fill = dropdown.getCurrentSelection();
}

circle.update();
