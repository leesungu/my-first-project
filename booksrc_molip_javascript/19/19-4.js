// Date.UTC()

js.log(Date.UTC(2013));

js.log(Date.UTC(2013, 10));
js.log(Date.UTC(2013, 10, 24));

js.log(Date.UTC(2013, 10, 24, 09));

js.log(Date.UTC(2013, 10, 24, 09, 11));

js.log(Date.UTC(2013, 10, 24, 09, 11, 23));

js.log(Date.UTC(2013, 10, 24, 09, 11, 23, 123));

js.log('parse(): ' + Date.parse('2013-11-24T09:11:23.123'));
