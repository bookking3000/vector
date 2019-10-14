import Group from '../svg/Group.js';
import Text from '../svg/Text.js';
import Input from '../input/Input.js';
/**
*  Dropdown with menu item labels that can be selected.
*/
export default class DropdownControl extends Input {
    optionLabels: string[];
    currentIndex: number;
    textWidth: number;
    expanded: boolean;
    currSelectionText: Text;
    collapsedView: Group;
    expandedView: Group;
    x: number;
    y: number;
    /**
     *
     *
     */
    constructor(x: number, y: number, optionLabels: string[], defaultIndex: number);
    /**
    *  Updates the expanded view of menu options.
    */
    updateExpandedView(): void;
    /**
    * Returns the text of the current selection in from the dropdown menu.
    */
    getCurrentSelection(): string;
    /**
    * Returns the longest string in the given string array.
    */
    getLongestString(list: string[]): string;
}
