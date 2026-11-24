
# Ctrl+Number shortcuts to switch to unpinned tabs

## Synopsis

This browser extension enables switching tabs with a _Ctrl+Number_ 
keypress, ignoring any pinned tabs.  _Ctrl+1_ switches to the first 
unpinned tab, _Ctrl+2_ selects the second unpinned tab, and so 
on. _Ctrl+9_ is an exception and switches to the last tab.


## Motivation

Since pinned tabs are always visible, it is preferable for the 
_Ctrl+Number_ keyboard shortcuts to ignore these when switching 
tabs.

The most common numbered keyboard shortcut is perhaps _Ctrl+1_, since 
the first tab is often obscured when there are a large number of tabs 
open.  In this case, the first non-pinned tab is generally the desired 
target tab.  If the first pinned tab were selected instead, it would 
become necessary to move through any subsequent pinned tabs with the 
_Next-Tab_ keyboard shortcut to get to the target tab using only 
keystrokes.


## Platform-specific details

On Linux, the standard shortcut for switching to numbered tabs 
utilizes the _Alt_ modifier key, which is less commonly used in this 
operating system and therefore less intuitive.  This extension enables 
the functionality above with the _Control_ modifier key.

On macOS, the modifier key continues to be the _Command_ key as usual, 
but pinned tabs are ignored.

Similarly, on Windows, the modifier key continues to be the _Control_ 
key, but pinned tabs are ignored.


## Similar extensions

This extension is based on a couple of similar ones.  Feel free to use 
those instead, but do not install more than one to avoid conflicts.

  * [Navigate unpinned tabs](https://addons.mozilla.org/en-US/firefox/addon/navigate-unpinned-tabs)
  * [Ctrl+Number to switch tabs](https://addons.mozilla.org/en-US/firefox/addon/ctrl-number-to-switch-tabs)


## Installation

This extension can be installed from the Firefox Add-ons site.

