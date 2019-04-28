# Flex Toolbox
Toolbox to use flexbox with classes

## Classes
### Items alignments `display` `justify-content` `align-items`
This add `display: flex`.
Use .flex alone if you only want `display: flex`.
~~~ CSS
.flex-[$mainaxis][-$crossaxis]
~~~

|  | possible values | 
|---|---|
| $mainaxis | start, end, center, between, evenly, around |
| $crossaxis | start, end, center, baseline, stretch |

### Item alignments `flex-direction`
~~~ CSS
.dir-$direction[-reverse]
~~~

|  | possible values | 
|---|---|
| $direction | col, row |

### Item alignment `align-self`
~~~ CSS
.item-$alignment
~~~
|  | possible values | 
|---|---|
| $alignment | start, end, center, baseline |

### Others
~~~ CSS
.doWrap[-reverse]
.center-items
~~~
