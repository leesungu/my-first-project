// Math.atan2()

js.log('-- Y가 0보다 작음 --');

js.log(Math.atan2(-20, +0));
js.log(Math.atan2(-20, -0));

js.log('-- Y가 0이 아니면서 무한대가 아님 --');

js.log(Math.atan2(10, +Infinity));
js.log(Math.atan2(10, -Infinity));
js.log(Math.atan2(-10, +Infinity));
js.log(Math.atan2(-10, -Infinity));
