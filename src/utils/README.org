* Utility Folder

** Purpose
This folder is for utility methods or classes. In the past this folder has contained parsers or custom math functions. It's typically pretty rare to need such a function at all - let alone for several different files, so this folder is pretty rare. But if you ever have a class/function that isn't a UI component or a network requst, it should probably go in here.

An example of a public utility function from the courses portlet:
#+begin_src javascript
export const displayLink = (room, campus) => {
  if (!Object.is(room, undefined)) {
    if (
      Object.is(campus, 'Internet') ||
      Object.is(campus, 'Off-Campus - Domestic') ||
      Object.is(campus, 'Macomb') ||
      Object.is(campus, 'Mt. Clemens') ||
      Object.is(room.trim(), 'N/A')
    ) {
      return false
    } else {
      return true
    }
  }
}
#+end_src
