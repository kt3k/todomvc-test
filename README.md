# todomvc-test v1.0.1

> Test [TodoMVC][] app on the given url.

Supports node.js >= 6.

# Usage

Install via npm:

    $ npm install -g todomvc-test

This installs the command `todomvc-test`. You can invoke it like:

    $ todomvc-test <url>

If your app is at `localhost:8000` then, invoke it like:

    $ todomvc-test http://localhost:8000

If your todomvc app conforms to the spec, it outputs like the below:

```console
$ todomvc-test http://localhost:8000
Starting the test of TodoMVC app on http://localhost:8000

Options:
- speedMode: true
- laxMode: false


  TodoMVC
    When page is initially opened
      ✓ should focus on the todo input field
    No Todos
      ✓ should hide #main and #footer (134ms)
    New Todo
      ✓ should allow me to add todo items (455ms)
      ✓ should clear text input field when an item is added (185ms)
      ✓ should append new items to the bottom of the list (573ms)
      ✓ should trim text input (195ms)
      ✓ should show #main and #footer when items added (232ms)
    Mark all as completed
      ✓ should allow me to mark all items as completed (86ms)
      ✓ should correctly update the complete all checked state (219ms)
      ✓ should allow me to clear the completion state of all items (103ms)
      ✓ complete all checkbox should update state when items are completed / cleared (212ms)
    Item
      ✓ should allow me to mark items as complete (452ms)
      ✓ should allow me to un-mark items as complete (431ms)
    Editing
      ✓ should focus the input (40ms)
      ✓ should hide other controls when editing (55ms)
      ✓ should save edits on enter (302ms)
      ✓ should save edits on blur (357ms)
      ✓ should trim entered text (293ms)
      ✓ should remove the item if an empty text string was entered (207ms)
      ✓ should cancel edits on escape (234ms)
    Counter
      ✓ should display the current number of todo items (361ms)
    Clear completed button
      ✓ should display the correct text (107ms)
      ✓ should remove completed items when clicked (225ms)
      ✓ should be hidden when there are no items that are completed (268ms)
    Persistence
      ✓ should persist its data (634ms)
    Routing
      ✓ should allow me to display active items (194ms)
      ✓ should respect the back button (449ms)
      ✓ should allow me to display completed items (265ms)
      ✓ should allow me to display all items (364ms)
      ✓ should highlight the currently applied filter (166ms)


  30 passing (32s)
```

# Background

This tool's test cases are basically extracted from the official [TodoMVC][]'s repository and should be compatible with them.

# Options

See `todomvc-test --help` for more options.

# License

MIT

[TodoMVC]: http://todomvc.com/
