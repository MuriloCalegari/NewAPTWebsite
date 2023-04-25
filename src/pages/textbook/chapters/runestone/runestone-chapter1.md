::: {.qnum prefix="sort-2-" start="1"}
:::

# Optional reverse parameter

The sorted function takes some optional parameters (see the Optional
Parameters page). The first optional parameter is a key function, which
will be described in the next section. The second optional parameter is
a Boolean value which determines whether to sort the items in reverse
order. By default, it is False, but if you set it to True, the list will
be sorted in reverse order.

::: activecode
ac18_2_1

L2 = \[\"Cherry\", \"Apple\", \"Blueberry\"\] print(sorted(L2,
reverse=True))
:::

::: note
::: title
Note
:::

For most functions, it is possible to provide optional parameters
without keywords, but the `sorted` function prevents this, so you have
to provide keywords for the `reverse` and `key` parameters. In this
situation, it is more convenient to use the keyword mechanism anyway.
:::

**Check Your Understanding**

::: {.activecode language="python" autograde="unittest" practice="T"}
ac18_2_2

**1.** Sort the list, `lst` from largest to smallest. Save this new list
to the variable `lst_sorted`. \~\~\~\~ lst = \[3, 5, 1, 6, 7, 2, 9, -2,
5\]

---

from unittest.gui import TestCaseGui

class myTests(TestCaseGui):

> def testOne(self):
>
> : self.assertEqual(lst_sorted, sorted(lst, reverse=True), \"Testing
> that lst_sorted value is assigned to correct values.\")

myTests().main()
:::
