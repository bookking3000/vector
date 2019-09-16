import Interactive from '../../Interactive.js';
import { getScriptName } from '../../Util.js';
import DropdownControl from '../../elements/DropdownControl.js';

let interactive = new Interactive(getScriptName());
interactive.width = 768;
interactive.height = 300;
interactive.root.style.border = "1px solid grey";

let dropdown = interactive.dropdownControl(20, 60, ["red", "blue", "white", "purple"], 1);
let ellipse = interactive.ellipse(400,75,50,50);

ellipse.addDependency(dropdown);
ellipse.update = function(){
    ellipse.style.fill = dropdown.getCurrentSelection();
}

ellipse.update();
