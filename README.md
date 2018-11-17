# Next monday

This is a simple package to help you find a date by the day of the week.

Want to find the nearest Friday? Next Monday? Previous Thursday? Just ask!

This is licensed under the MIT License. Check [the License](./LICENSE) for further details.

## How to Install

Just install it from npm.

`npm install next_monday --save`

## How to Use

First add it to your script with:

`const nm = require('next_monday')`

Then you can use any of its methods to find the day of the week you want.

They expect ONE argument: the day of the week. It can be the **name** of the day (like "Saturday" or "saturday"), or the **number** of the day like JavaScript does (0 is Sunday, 1 is Monday, etc).

There's a short version for all those methods, if you dislike longer method names.

**All of those methods will return a Date object.**

### Finding the nearest day of week

This method will return the **nearest** day of the week. It may be **before** or **after** today.

`date = nm.findNearestDayOfWeek('friday')`

or

`date = nm.nearest('friday')`

### Finding the next day of the week

This method will return the nearest desired day AFTER today. You use this when you want a guarantee that the day is in the future.

`date = nm.findNextDayOfWeek('Monday')`

or

`date = nm.next('monday')`

### Finding the previous day of the week

This method will return the nearest desired day BEFORE today. You use this when you want a guarantee that the day is in the past.

`date = nm.findPreviousDayOfWeek('thursday')`

or

`date = nm.previous('Friday')`

## That's it

Yes, that's it. Just a small and simple library.

# Author

This was created by Leonardo Bighi.

You can find me on [twitter](www.twitter.com/bighi).
