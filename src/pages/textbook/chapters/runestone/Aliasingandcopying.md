::: {.qnum prefix="dict-4-" start="1"}
:::

::: index
alias; dictionary copy; dictionary dictionary; alias and copy
:::

# Aliasing and Copying

Because dictionaries are mutable, you need to be aware of aliasing (as
we saw with lists). Whenever two variables refer to the same dictionary
object, changes to one affect the other. For example, `opposites` is a
dictionary that contains pairs of opposites.

::: activecode
ch12_dict11

opposites = {\'up\': \'down\', \'right\': \'wrong\', \'true\':
\'false\'} alias = opposites

print(alias is opposites)

alias\[\'right\'\] = \'left\' print(opposites\[\'right\'\])
:::

As you can see from the `is` operator, `alias` and `opposites` refer to
the same object.

If you want to modify a dictionary and keep a copy of the original, use
the dictionary `copy` method. Since *acopy* is a copy of the dictionary,
changes to it will not effect the original.

``` python
acopy = opposites.copy()
acopy['right'] = 'left'    # does not change opposites
```

**Check your understanding**

::: {.mchoice practice="T" answer_a="23" answer_b="None" answer_c="999" answer_d="Error, there are two different keys named elephant." correct="c" feedback_a="mydict and yourdict are both names for the same dictionary." feedback_b="The dictionary is mutable so changes can be made to the keys and values." feedback_c="Yes, since yourdict is an alias for mydict, the value for the key elephant has been changed." feedback_d="There is only one dictionary with only one key named elephant.  The dictionary has two different names, mydict and yourdict."}
test_question11_4\_1

What is printed by the following statements?

``` python
mydict = {"cat":12, "dog":6, "elephant":23, "bear":20}
yourdict = mydict
yourdict["elephant"] = 999
print(mydict["elephant"])
```
:::
