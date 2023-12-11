// District name
var districts = {
	Comilla: 'কুমিল্লা',
	Jessore: 'যশোর ',
	Shatkhira: 'সাতক্ষীরা ',
	Narsingdi: 'নরসিংদী ',
	Jhalokati: 'ঝালকাঠী ',
	Sylhet: 'সিলেট',
	Maulvibazar: 'মৌলভীবাজার ',
	Panchagarh: 'পঞ্চগড় ',
	Gazipur: 'গাজীপুর ',
	Sirajganj: 'সিরাজগঞ্জ ',
	Meherpur: 'মেহেরপুর ',
	Feni: 'ফেনী ',
	Pabna: 'পাবনা ',
	Shariatpur: 'শরিয়তপুর  ',
	Bogura: 'বগুড়া ',
	Dinajpur: 'দিনাজপুর ',
	Narail: 'নড়াইল ',
	Patuakhali: 'পটুয়াখালী ',
	Pirojpur: 'পিরোজপুর ',
	Brahmanbaria: 'ব্রাহ্মণবাড়িয়া ',
	Barisal: 'বরিশাল ',
	Habiganj: 'হবিগঞ্জ ',
	Rangamati: 'রাঙ্গামাটি ',
	Rajshahi: 'রাজশাহী ',
	Noakhali: 'নোয়াখালী ',
	Narayanganj: 'নারায়ণগঞ্জ ',
	Sunamganj: 'সুনামগঞ্জ ',
	Chuadanga: 'চুয়াডাঙ্গা ',
	Kushtia: 'কুষ্টিয়া ',
	Magura: 'মাগুরা ',
	Natore: 'নাটোর ',
	Lalmonirhat: 'লালমনিরহাট ',
	Nilphamari: 'নীলফামারী ',
	Gaibandha: 'গাইবান্ধা ',
	Jaipurhat: 'জয়পুরহাট ',
	Bhola: 'ভোলা ',
	"Chapai Nawabganj": 'চাঁপাইনবাবগঞ্জ ',
	Thakurgaon: 'ঠাকুরগাঁও ',
	Sherpur: 'শেরপুর ',
	Tangail: 'টাঙ্গাইল ',
	Rangpur: 'রংপুর ',
	Naogaon: 'নওগাঁ ',
	Mymensingh: 'ময়মনসিংহ ',
	Khulna: 'খুলনা ',
	Chandpur: 'চাঁদপুর ',
	Kishoreganj: 'কিশোরগঞ্জ ',
	Jamalpur: 'জামালপুর ',
	Manikganj: 'মানিকগঞ্জ ',
	Netrokona: 'নেত্রকোনা ',
	Dhaka: 'ঢাকা ',
	Munshiganj: 'মুন্সীগঞ্জ ',
	Rajbari: 'রাজবাড়ী ',
	Madaripur: 'মাদারীপুর ',
	Gopalganj: 'গোপালগঞ্জ ',
	Faridpur: 'ফরিদপুর ',
	Borguna: 'বরগুনা ',
	Lakshmipur: 'লক্ষ্মীপুর  ',
	Chattogram: 'চট্টগ্রাম ',
	"Coxs Bazar": 'কক্সবাজার ',
	Khagrachari: 'খাগড়াছড়ি ',
	Bagerhat: 'বাগেরহাট ',
	Bandarban: 'বান্দরবান ',
	Jhinaidaha: 'ঝিনাইদহ ',
	Kurigram: 'কুড়িগ্রাম ',
};
// Pupulate default data with 0 (zero)
var district_data = {
	"Comilla": '0',
	"Jessore": '0',
	"Shatkhira": '0',
	"Narsingdi": '0',
	"Jhalokati": '0',
	"Sylhet": '0',
	"Maulvibazar": '0',
	"Panchagarh": '0',
	"Gazipur": '0',
	"Sirajganj": '0',
	"Meherpur": '0',
	"Feni": '0',
	"Pabna": '0',
	"Shariatpur": '0',
	"Bogura": '0',
	"Dinajpur": '0',
	"Narail": '0',
	"Patuakhali": '0',
	"Pirojpur": '0',
	"Brahmanbaria": '0',
	"Barisal": '0',
	"Habiganj": '0',
	"Rangamati": '0',
	"Rajshahi": '0',
	"Noakhali": '0',
	"Narayanganj": '0',
	"Sunamganj": '0',
	"Chuadanga": '0',
	"Kushtia": '0',
	"Magura": '0',
	"Natore": '0',
	"Lalmonirhat": '0',
	"Nilphamari": '0',
	"Gaibandha": '0',
	"Jaipurhat": '0',
	"Bhola": '0',
	"Chapai Nawabganj": '0',
	"Thakurgaon": '0',
	"Sherpur": '0',
	"Tangail": '0',
	"Rangpur": '0',
	"Naogaon": '0',
	"Mymensingh": '0',
	"Khulna": '0',
	"Chandpur": '0',
	"Kishoreganj": '0',
	"Jamalpur": '0',
	"Manikganj": '0',
	"Netrokona": '0',
	"Dhaka": '0',
	"Munshiganj": '0',
	"Rajbari": '0',
	"Madaripur": '0',
	"Gopalganj": '0',
	"Faridpur": '0',
	"Borguna": '0',
	"Lakshmipur": '0',
	"Chattogram": '0',
	"Coxs Bazar": '0',
	"Khagrachari": '0',
	"Bagerhat": '0',
	"Bandarban": '0',
	"Jhinaidaha": '0',
	"Kurigram": '0',
};

function checkNumberRange(scale, number) {
	for (const range in scale) {
		const [start, end] = range.split('-').map(Number);
		if (number >= start && number <= end) {
			return range;
		}
	};
}
const en2bn = n => n.replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d])

function getMap(config, element, disrtict_data, scale, scale_value, legend_title) {
	var map = new jvm.Map({
		container: $(element),
		map: 'bangladesh',
		backgroundColor: config.backgroundColor,
		borderColor: config.borderColor,
		borderOpacity: config.borderOpacity,
		borderWidth: config.borderWidth,
		regionsSelectable: config.regionsSelectable,
		zoomOnScroll: config.zoomOnScroll,
		zoomButtons: config.zoomButtons,
		focusOn: {
			x: 0.5,
			y: 0.5,
			scale: 2.6,
		},
		labels: {
			regions: {
				render: function (label) {
					if(config.showLebel) {
						if(config.labelLanguage == 'bn') {
							return districts[label];
						}
						return label;
					}
				},
				offsets: function (label) {},
			},
		},
		series: {
			regions: [
				{
					scale: scale,
					attribute: 'fill',
					values: scale_value,
					legend: {
						vertical: true,
						title: legend_title
					}
				},
			],
		},
		onMarkerTipShow: function (event, tip, index) {
			tip.html(tip.html());
		},
		onRegionTipShow: function (event, tip, label) {
			selectedDistrict = label;
			if(config.labelLanguage == 'bn') {
				tip.html(districts[label] + ' : ' + Number(disrtict_data[label]).toLocaleString('bn'));
			} else {
				tip.html(label + ' : ' + Number(disrtict_data[label]).toLocaleString('en'));
			}
		},
		onRegionOver: function (event, code) {},
		onRegionOut: function (event, code) {},
		onRegionClick: function (event, code) {},
		onRegionSelected: function (
			event,
			code,
			isSelected,
			selectedRegions
		) {
			if (window.localStorage) {
				window.localStorage.setItem(
					'jvectormap-selected-regions',
					JSON.stringify(selectedRegions)
				);
			}
		},
		onViewportChange: function (e, scale, transX, transY) {},
		regionLabelStyle: {
			initial: {
				'font-family': 'SolaimanLipi',
				'font-size': '14',
				cursor: 'default',
				fill: 'black',
			},
		},
	});
}