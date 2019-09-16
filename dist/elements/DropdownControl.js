import SVG from '../SVG.js';
import Element from '../elements/Element.js';
import Rectangle from '../elements/Rectangle.js';
import Text from '../elements/Text.js';
import Path from '../elements/Path.js';
/**
*  Dropdown with menu item labels that can be selected.
*/
export default class DropdownControl extends Element {
    /**
     *
     *
     */
    constructor(x, y, optionLabels, defaultIndex) {
        if (optionLabels === undefined || optionLabels.length === 0) {
            throw new Error('Dropdown control must have at least one option');
        }
        if (defaultIndex < 0 || defaultIndex >= optionLabels.length) {
            throw new Error('Default index must be within bounds of option labels array.');
        }
        super();
        this.optionLabels = optionLabels;
        this.currentIndex = defaultIndex;
        this.expanded = false;
        this.textWidth = new Text(0, 0, this.getLongestString(optionLabels)).length;
        this.x = x;
        this.y = y;
        this.collapsedView = SVG.Group();
        this.collapsedView.setAttribute("transform", `translate(${this.x},${this.y})`);
        let currSelection = SVG.Group();
        this.currSelectionText = new Text(0, 1, this.optionLabels[this.currentIndex]);
        this.currSelectionText.root.setAttribute('alignment-baseline', 'middle');
        this.currSelectionText.style.textAnchor = 'middle';
        let currSelectionBox = new Rectangle(0, -16, this.textWidth * 2 + 16, 32);
        this.currSelectionText.x = currSelectionBox.x + currSelectionBox.width / 2;
        currSelection.appendChild(currSelectionBox.root);
        currSelection.appendChild(this.currSelectionText.root);
        let dropdownButton = SVG.Group();
        dropdownButton.classList.add('dropdown-control-button');
        let buttonBox = new Rectangle(this.textWidth * 2 + 16, -16, 32, 32);
        let radius = 8;
        let downArrow = new Path(` M ${radius + this.textWidth * 2 + 31} ${0}
                                 L ${radius * Math.cos(-2 * Math.PI / 3) + this.textWidth * 2 + 31} ${radius * Math.sin(-2 * Math.PI / 3)}
                                 L ${radius * Math.cos(-4 * Math.PI / 3) + this.textWidth * 2 + 31} ${radius * Math.sin(-4 * Math.PI / 3)}
                                 Z`);
        downArrow.style.fill = '#333333';
        dropdownButton.appendChild(buttonBox.root);
        dropdownButton.appendChild(downArrow.root);
        let _this = this;
        dropdownButton.onmousedown = function () {
            if (!_this.expanded) {
                _this.updateExpandedView();
                _this.root.appendChild(_this.expandedView);
                _this.expanded = true;
            }
            else {
                _this.root.removeChild(_this.expandedView);
                _this.expanded = false;
            }
            _this.onchange();
        };
        this.collapsedView.appendChild(currSelection);
        this.collapsedView.appendChild(dropdownButton);
        this.root = this.collapsedView;
        this.root.id = this.id;
    }
    /**
    *  Updates the expanded view of menu options.
    */
    updateExpandedView() {
        this.expandedView = SVG.Group();
        this.collapsedView.setAttribute("transform", `translate(${this.x},${this.y})`);
        let currSelection = SVG.Group();
        currSelection.classList.add('dropdown-control-menu-option');
        let _this = this;
        let rectY = 32;
        this.optionLabels.forEach((label, i) => {
            if (i == this.currentIndex) {
                return;
            }
            let menuOption = SVG.Group();
            menuOption.classList.add('dropdown-control-menu-option');
            let optionText = new Text(0, 1 + rectY, label);
            optionText.root.setAttribute('alignment-baseline', 'middle');
            optionText.style.textAnchor = 'middle';
            let optionBox = new Rectangle(0, -16 + rectY, this.textWidth * 2 + 16, 32);
            optionText.x = optionBox.x + optionBox.width / 2;
            menuOption.appendChild(optionBox.root);
            menuOption.appendChild(optionText.root);
            menuOption.onmousedown = function () {
                _this.root.removeChild(_this.expandedView);
                _this.expanded = false;
                _this.currentIndex = i;
                _this.currSelectionText.contents = label;
                _this.onchange();
            };
            this.expandedView.appendChild(menuOption);
            rectY += 32;
        });
    }
    /**
    * The default behavior is to update its dependents on change.
    */
    onchange() {
        this.updateDependents();
    }
    /**
    * Returns the text of the current selection in from the dropdown menu.
    */
    getCurrentSelection() {
        return this.optionLabels[this.currentIndex];
    }
    /**
    * Returns the longest string in the given string array.
    */
    getLongestString(list) {
        if (list.length == 0) {
            return "";
        }
        let longest = list[0];
        for (let i = 1; i < list.length; i++) {
            if (list[i].length > longest.length) {
                longest = list[i];
            }
        }
        return longest;
    }
}
//# sourceMappingURL=DropdownControl.js.map