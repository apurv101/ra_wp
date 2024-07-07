var tealiumiq_currency = {
    ts:"202405220100",
    rates:{"BYN":3.273261,"SSP":130.26,"XPT":0.00095263,"SRD":32.3565,"ILS":3.666585,"QAR":3.6415,"NIO":36.75,"DOP":58.731482,"TZS":2595,"MKD":56.673874,"XCD":2.70255,"THB":36.3845,"NGN":1418.5,"ANG":1.802643,"VES":36.524614,"XAF":604.158925,"DKK":6.8719,"IDR":16003.6,"WST":2.8,"PEN":3.734,"SOS":571,"BZD":2.01607,"SZL":18.135,"KHR":4075,"LKR":300.017417,"MNT":3450,"IQD":1310,"ZWL":322,"JPY":156.27408333,"AZN":1.7,"PKR":278.500892,"LRD":193.524983,"GYD":209.366127,"JOD":0.7089,"RON":4.581,"SLL":20969.5,"GHS":14.452309,"TND":3.1125,"HUF":354.874323,"ZMW":25.829567,"MXN":16.625876,"TRY":32.196501,"BBD":2,"AUD":1.499635,"CUC":1,"UZS":12730,"ZAR":18.0762,"UYU":38.423766,"SVC":8.751737,"CLF":0.0322,"VUV":118.722,"LBP":89545.8715,"ETB":57.3,"MMK":2100.376922,"MDL":17.580964,"RWF":1296,"GMD":67.775,"SYP":2512.53,"PLN":3.917072,"NZD":1.639562,"LYD":4.835,"DZD":134.350578,"MAD":9.908743,"BDT":117.177686,"MYR":4.6925,"PAB":1,"IMP":0.786574,"LSL":18.09,"STN":22.9125,"CHF":0.911157,"HKD":7.80442,"BGN":1.801355,"DJF":177.827972,"TJS":10.807017,"SEK":10.693801,"XDR":0.755566,"PYG":7509.671069,"AWG":1.8,"CZK":22.7801,"SGD":1.346934,"MWK":1733.824125,"MUR":46.13642,"BSD":1,"STD":22281.8,"VND":25461.48991,"TWD":32.2895,"ALL":92.363342,"INR":83.300848,"MVR":15.46,"RUB":90.497738,"HTG":132.690045,"SCR":13.581657,"ARS":889.2419,"GBP":0.786574,"BMD":1,"BTN":83.292594,"JMD":156.08346,"SBD":8.511255,"XOF":604.158925,"EUR":0.921034,"SDG":601,"GEL":2.73,"CRC":512.485221,"COP":3823.03812,"MOP":8.03943,"GNF":8600,"JEP":0.786574,"CNY":7.09405,"XPF":109.908633,"CUP":25.75,"RSD":107.875,"TOP":2.359826,"GIP":0.786574,"ERN":15,"LAK":21350,"HRK":6.938895,"MGA":4422.61687,"UAH":39.82154,"AOA":850.5,"SAR":3.750467,"AED":3.672975,"NOK":10.669265,"NPR":133.268291,"BOB":6.911374,"USD":1,"CDF":2802,"TTD":6.788959,"KGS":88.15,"BWP":13.479433,"OMR":0.384885,"HNL":24.749999,"BIF":2870.774199,"KZT":441.51248,"XAU":0.0004131,"MRU":39.7,"BTC":1.4259604e-05,"KPW":900,"BRL":5.123299,"CAD":1.363822,"SHP":0.786574,"CLP":888.906448,"PGK":3.88599,"GTQ":7.764713,"IRR":42075,"EGP":46.7347,"KRW":1364.771134,"XAG":0.03128436,"BAM":1.800142,"AFN":70.500003,"PHP":58.144001,"UGX":3805.90951,"GGP":0.786574,"CNH":7.248541,"KMF":453.7498,"FJD":2.261,"CVE":102.05,"FKP":0.786574,"AMD":388.045895,"BHD":0.376922,"NAD":18.09,"YER":249.899884,"KWD":0.306882,"KES":132,"XPD":0.00097315,"BND":1.347299,"KYD":0.833525,"ISK":138.25,"TMT":3.510001,"MZN":63.899991},
    convert:function(a,f,t){
		// Convert that value to an array
		var isString = typeof a == "string",
			converted = isString ? [a] : a;

		// Iterate over the values to convert each one
		for (var i=0; i<converted.length; i++) {
			converted[i] = parseFloat(converted[i]);
			f = f.toUpperCase();
			t = t.toUpperCase();
			if (converted[i] > 0 && this.rates[f] > 0 && this.rates[t] > 0){
				var v = converted[i] / this.rates[f] * this.rates[t];
				converted[i] = v.toFixed(2);
			}
		}

		// Return the value we accepted
		if (isString) return converted[0];
		else return converted;
    }
}