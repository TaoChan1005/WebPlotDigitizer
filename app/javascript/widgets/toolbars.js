/*
    WebPlotDigitizer - https://automeris.io/WebPlotDigitizer

    Copyright 2010-2023 Ankit Rohatgi <ankitrohatgi@hotmail.com>

    This file is part of WebPlotDigitizer.

    WebPlotDigitizer is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    WebPlotDigitizer is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with WebPlotDigitizer.  If not, see <http://www.gnu.org/licenses/>.
*/
var wpd = wpd || {};
wpd.toolbar = (function() {
    function show(tbid) { // Shows a specific toolbar
        clear();
        let tb = document.getElementById(tbid);
        tb.style.visibility = "visible";
    }

    function clear() { // Clears all open toolbars

        const toolbarList = document.getElementsByClassName('toolbar');
        for (let ii = 0; ii < toolbarList.length; ii++) {
            toolbarList[ii].style.visibility = "hidden";
        }
    }

    return {
        show: show,
        clear: clear
    };
})();