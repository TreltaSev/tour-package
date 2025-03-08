const prices = {
	airTravel: {
		'first-class': 3800,
		business: 2600,
		economy: 1200
	},
	package: {
		beach: {
			base: 400,
			locations: {
				kaanapali: 200,
				wailea: 210,
				hookipa: 220,
				kapalua: 230
			}
		},
		volcano: {
			base: 380,
			locations: {
				haleakala: 200,
				'mauna-kahalawai': 210
			}
		},
		city: {
			base: 400,
			locations: {
				kahului: 200,
				lahina: 210,
				kihei: 220,
				wailuku: 230
			}
		}
	},
	extra: {
		meals: 150,
		eveningWine: 90,
		carRental: 120
	}
};

export default prices;
