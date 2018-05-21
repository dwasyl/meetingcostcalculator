// JS for the Meeting Cost Calculator

var app = app || {};

app.organizations = {
  'gnwt': {
    name: 'GNWT Public Service',
    hideDropdownLabels: 0
  },
  'core': {
    name: 'Core Public Service',
    hideDropdownLabels: 0
  },
  'neb': {
    name: 'National Energy Board',
    hideDropdownLabels: 0
  },
  'caf': {
    name: 'Canadian Armed Forces',
    hideDropdownLabels: 1
  }
}

// Holder for rates from multiple organizations
app.rates = app.rates || {};

// TBS Rates of Pay
// Adapted from,
// https://www.tbs-sct.gc.ca/pubs_pol/hrpubs/coll_agre/rates-taux-eng.asp
app.rates.core = [
  {
    "label": "AS-1",
    "description": "Administrative Services",
    "min": "48796",
    "median": "51685.5",
    "max": "54575"
  },
  {
    "label": "AS-2",
    "description": "Administrative Services",
    "min": "54374",
    "median": "56480",
    "max": "58586"
  },
  {
    "label": "AS-3",
    "description": "Administrative Services",
    "min": "58281",
    "median": "60537.5",
    "max": "62794"
  },
  {
    "label": "AS-4",
    "description": "Administrative Services",
    "min": "63663",
    "median": "66228",
    "max": "68793"
  },
  {
    "label": "AS-5",
    "description": "Administrative Services",
    "min": "76002",
    "median": "79086.5",
    "max": "82171"
  },
  {
    "label": "AS-6",
    "description": "Administrative Services",
    "min": "84658",
    "median": "87993",
    "max": "91328"
  },
  {
    "label": "AS-7",
    "description": "Administrative Services",
    "min": "89112",
    "median": "95502",
    "max": "101892"
  },
  {
    "label": "AS-8",
    "description": "Administrative Services",
    "min": "92014",
    "median": "100159.5",
    "max": "108305"
  },
  {
    "label": "CM-1",
    "description": "Communications",
    "min": "32695",
    "median": "32695",
    "max": "32695"
  },
  {
    "label": "CM-2",
    "description": "Communications",
    "min": "36172",
    "median": "36172",
    "max": "36172"
  },
  {
    "label": "CM-3",
    "description": "Communications",
    "min": "39890",
    "median": "39890",
    "max": "39890"
  },
  {
    "label": "CM-4",
    "description": "Communications",
    "min": "44299",
    "median": "44299",
    "max": "44299"
  },
  {
    "label": "CM-5",
    "description": "Communications",
    "min": "47693",
    "median": "47693",
    "max": "47693"
  },
  {
    "label": "CM-6",
    "description": "Communications",
    "min": "54876",
    "median": "54876",
    "max": "54876"
  },
  {
    "label": "CM-7",
    "description": "Communications",
    "min": "60132",
    "median": "60132",
    "max": "60132"
  },
  {
    "label": "CR-1",
    "description": "Clerical and Regulatory",
    "min": "33128",
    "median": "34864.5",
    "max": "36601"
  },
  {
    "label": "CR-2",
    "description": "Clerical and Regulatory",
    "min": "35958",
    "median": "37192",
    "max": "38426"
  },
  {
    "label": "CR-3",
    "description": "Clerical and Regulatory",
    "min": "40786",
    "median": "42389.5",
    "max": "43993"
  },
  {
    "label": "CR-4",
    "description": "Clerical and Regulatory",
    "min": "45189",
    "median": "46983",
    "max": "48777"
  },
  {
    "label": "CR-5",
    "description": "Clerical and Regulatory",
    "min": "49387",
    "median": "51426.5",
    "max": "53466"
  },
  {
    "label": "CR-6",
    "description": "Clerical and Regulatory",
    "min": "56214",
    "median": "58425.5",
    "max": "60637"
  },
  {
    "label": "CR-7",
    "description": "Clerical and Regulatory",
    "min": "62354",
    "median": "64952",
    "max": "67550"
  },
  {
    "label": "CS-1",
    "description": "Computer Systems",
    "min": "53611",
    "median": "61349.5",
    "max": "69088"
  },
  {
    "label": "CS-2",
    "description": "Computer Systems",
    "min": "66360",
    "median": "73791",
    "max": "81222"
  },
  {
    "label": "CS-3",
    "description": "Computer Systems",
    "min": "78333",
    "median": "87827.5",
    "max": "97322"
  },
  {
    "label": "CS-4",
    "description": "Computer Systems",
    "min": "89690",
    "median": "100664.5",
    "max": "111639"
  },
  {
    "label": "CS-5",
    "description": "Computer Systems",
    "min": "103267",
    "median": "118919",
    "max": "134571"
  },
  {
    "label": "EC-1",
    "description": "Economics and Social Science Services",
    "min": "48355",
    "median": "52284.5",
    "max": "56214"
  },
  {
    "label": "EC-2",
    "description": "Economics and Social Science Services",
    "min": "54101",
    "median": "58063.5",
    "max": "62026"
  },
  {
    "label": "EC-3",
    "description": "Economics and Social Science Services",
    "min": "59756",
    "median": "63685",
    "max": "67614"
  },
  {
    "label": "EC-4",
    "description": "Economics and Social Science Services",
    "min": "64505",
    "median": "69576",
    "max": "74647"
  },
  {
    "label": "EC-5",
    "description": "Economics and Social Science Services",
    "min": "77118",
    "median": "82941",
    "max": "88764"
  },
  {
    "label": "EC-6",
    "description": "Economics and Social Science Services",
    "min": "87128",
    "median": "94088",
    "max": "101048"
  },
  {
    "label": "EC-7",
    "description": "Economics and Social Science Services",
    "min": "98444",
    "median": "105730",
    "max": "113016"
  },
  {
    "label": "EC-8",
    "description": "Economics and Social Science Services",
    "min": "107030",
    "median": "114680.5",
    "max": "122331"
  },
  {
    "label": "FI-1 ",
    "description": "Financial Management",
    "min": "51528",
    "median": "61905",
    "max": "72282"
  },
  {
    "label": "FI-2 ",
    "description": "Financial Management",
    "min": "62721",
    "median": "73903",
    "max": "85085"
  },
  {
    "label": "FI-3 ",
    "description": "Financial Management",
    "min": "80186",
    "median": "91759.5",
    "max": "103333"
  },
  {
    "label": "FI-4 ",
    "description": "Financial Management",
    "min": "90389",
    "median": "103550.5",
    "max": "116712"
  },
  {
    "label": "GT-1",
    "description": "General Technical",
    "min": "40989",
    "median": "43565",
    "max": "46141"
  },
  {
    "label": "GT-2",
    "description": "General Technical",
    "min": "47005",
    "median": "50069",
    "max": "53133"
  },
  {
    "label": "GT-3",
    "description": "General Technical",
    "min": "52567",
    "median": "56086",
    "max": "59605"
  },
  {
    "label": "GT-4",
    "description": "General Technical",
    "min": "59227",
    "median": "63283.5",
    "max": "67340"
  },
  {
    "label": "GT-5",
    "description": "General Technical",
    "min": "66477",
    "median": "71030.5",
    "max": "75584"
  },
  {
    "label": "GT-6",
    "description": "General Technical",
    "min": "73566",
    "median": "78796",
    "max": "84026"
  },
  {
    "label": "GT-7",
    "description": "General Technical",
    "min": "84305",
    "median": "90341",
    "max": "96377"
  },
  {
    "label": "GT-8",
    "description": "General Technical",
    "min": "95636",
    "median": "102261",
    "max": "108886"
  },
  {
    "label": "HR-1",
    "description": "Historical Research",
    "min": "54167",
    "median": "58219.5",
    "max": "62272"
  },
  {
    "label": "HR-2",
    "description": "Historical Research",
    "min": "62832",
    "median": "66163",
    "max": "69494"
  },
  {
    "label": "HR-3",
    "description": "Historical Research",
    "min": "71886",
    "median": "75730.5",
    "max": "79575"
  },
  {
    "label": "HR-4",
    "description": "Historical Research",
    "min": "83567",
    "median": "88214.5",
    "max": "92862"
  },
  {
    "label": "HR-5",
    "description": "Historical Research",
    "min": "90220",
    "median": "97181.5",
    "max": "104143"
  },
  {
    "label": "IS-1 ",
    "description": "Information Services",
    "min": "48796",
    "median": "51685.5",
    "max": "54575"
  },
  {
    "label": "IS-2 ",
    "description": "Information Services",
    "min": "54374",
    "median": "56480",
    "max": "58586"
  },
  {
    "label": "IS-3 ",
    "description": "Information Services",
    "min": "63663",
    "median": "66228",
    "max": "68793"
  },
  {
    "label": "IS-4 ",
    "description": "Information Services",
    "min": "76002",
    "median": "79086.5",
    "max": "82171"
  },
  {
    "label": "IS-5 ",
    "description": "Information Services",
    "min": "84658",
    "median": "87993",
    "max": "91328"
  },
  {
    "label": "IS-6 ",
    "description": "Information Services",
    "min": "89112",
    "median": "95502",
    "max": "101892"
  },
  {
    "label": "LA-0",
    "description": "Law",
    "min": "36172",
    "median": "57571",
    "max": "78970"
  },
  {
    "label": "LA-1",
    "description": "Law",
    "min": "71734",
    "median": "85335",
    "max": "98936"
  },
  {
    "label": "LA-2",
    "description": "Law",
    "min": "99976",
    "median": "118931",
    "max": "137886"
  },
  {
    "label": "LA-3",
    "description": "Law",
    "min": "121156",
    "median": "136794.5",
    "max": "152433"
  },
  {
    "label": "LA-4",
    "description": "Law",
    "min": "136332",
    "median": "154754.5",
    "max": "173177"
  },
  {
    "label": "LA-5",
    "description": "Law",
    "min": "158057",
    "median": "175717",
    "max": "193377"
  },
  {
    "label": "MA-1",
    "description": "Mathematics",
    "min": "30451",
    "median": "41342",
    "max": "52233"
  },
  {
    "label": "MA-2",
    "description": "Mathematics",
    "min": "53468",
    "median": "57684",
    "max": "61900"
  },
  {
    "label": "MA-3",
    "description": "Mathematics",
    "min": "65093",
    "median": "69611",
    "max": "74129"
  },
  {
    "label": "MA-4",
    "description": "Mathematics",
    "min": "77726",
    "median": "82678",
    "max": "87630"
  },
  {
    "label": "MA-5",
    "description": "Mathematics",
    "min": "91058",
    "median": "95503",
    "max": "99948"
  },
  {
    "label": "MA-6",
    "description": "Mathematics",
    "min": "101438",
    "median": "106072.5",
    "max": "110707"
  },
  {
    "label": "MA-7",
    "description": "Mathematics",
    "min": "111071",
    "median": "115615",
    "max": "120159"
  },
  {
    "label": "PE-1",
    "description": "Personnel Administration",
    "min": "49670",
    "median": "55729",
    "max": "61788"
  },
  {
    "label": "PE-2",
    "description": "Personnel Administration",
    "min": "62657",
    "median": "66101",
    "max": "69545"
  },
  {
    "label": "PE-3",
    "description": "Personnel Administration",
    "min": "70259",
    "median": "74176.5",
    "max": "78094"
  },
  {
    "label": "PE-4",
    "description": "Personnel Administration",
    "min": "78114",
    "median": "82469",
    "max": "86824"
  },
  {
    "label": "PE-5",
    "description": "Personnel Administration",
    "min": "87468",
    "median": "92463",
    "max": "97458"
  },
  {
    "label": "PE-6",
    "description": "Personnel Administration",
    "min": "92755",
    "median": "100427",
    "max": "108099"
  },
  {
    "label": "PG-1",
    "description": "Purchasing and Supply",
    "min": "41366",
    "median": "47422.5",
    "max": "53479"
  },
  {
    "label": "PG-2",
    "description": "Purchasing and Supply",
    "min": "53998",
    "median": "57444",
    "max": "60890"
  },
  {
    "label": "PG-3",
    "description": "Purchasing and Supply",
    "min": "60117",
    "median": "63959",
    "max": "67801"
  },
  {
    "label": "PG-4",
    "description": "Purchasing and Supply",
    "min": "71317",
    "median": "75902.5",
    "max": "80488"
  },
  {
    "label": "PG-5",
    "description": "Purchasing and Supply",
    "min": "83948",
    "median": "89124",
    "max": "94300"
  },
  {
    "label": "PG-6",
    "description": "Purchasing and Supply",
    "min": "92468",
    "median": "97588.5",
    "max": "102709"
  },
  {
    "label": "PM-1 ",
    "description": "Programme Administration",
    "min": "48796",
    "median": "51685.5",
    "max": "54575"
  },
  {
    "label": "PM-2 ",
    "description": "Programme Administration",
    "min": "54374",
    "median": "56480",
    "max": "58586"
  },
  {
    "label": "PM-3 ",
    "description": "Programme Administration",
    "min": "58281",
    "median": "60537.5",
    "max": "62794"
  },
  {
    "label": "PM-4 ",
    "description": "Programme Administration",
    "min": "63663",
    "median": "66228",
    "max": "68793"
  },
  {
    "label": "PM-5 ",
    "description": "Programme Administration",
    "min": "76002",
    "median": "79086.5",
    "max": "82171"
  },
  {
    "label": "PM-6 ",
    "description": "Programme Administration",
    "min": "89112",
    "median": "95502",
    "max": "101892"
  },
  {
    "label": "PM-7 ",
    "description": "Programme Administration",
    "min": "92014",
    "median": "100159.5",
    "max": "108305"
  },
  {
    "label": "EX-01",
    "description": "Executive",
    "min": "125700",
    "median": "125700",
    "max": "125700"
  },
  {
    "label": "EX-02",
    "description": "Executive",
    "min": "140700",
    "median": "140700",
    "max": "140700"
  },
  {
    "label": "EX-03",
    "description": "Executive",
    "min": "157500",
    "median": "157500",
    "max": "157500"
  },
  {
    "label": "EX-04",
    "description": "Executive",
    "min": "180600",
    "median": "180600",
    "max": "180600"
  },
  {
    "label": "EX-05",
    "description": "Executive",
    "min": "202500",
    "median": "202500",
    "max": "202500"
  }
]

;


// Canadian Armed Forces
// Data from
// http://www.forces.gc.ca/en/caf-community-pay/pay-rates.page
app.rates.caf = [
    {
        "label": "Pvt",
        "description": "Private",
        "min": "33672",
        "median": "37416",
        "max": "41160"
    },
    {
        "label": "Cpl",
        "description": "Corporal",
        "min": "56568",
        "median": "64506",
        "max": "72444"
    },
    {
        "label": "MCpl",
        "description": "Master-Corporal",
        "min": "58944",
        "median": "66966",
        "max": "74988"
    },
    {
        "label": "Sgt",
        "description": "Sergeant",
        "min": "64992",
        "median": "72504",
        "max": "80016"
    },
    {
        "label": "WO",
        "description": "Warrant Officer",
        "min": "72396",
        "median": "78528",
        "max": "84660"
    },
    {
        "label": "MWO",
        "description": "Master Warrant Officer",
        "min": "79908",
        "median": "85134",
        "max": "90360"
    },
    {
        "label": "CWO",
        "description": "Chief Warrant Officer",
        "min": "88716",
        "median": "95772",
        "max": "102828"
    },
    {
        "label": "OCdt-A",
        "description": "Officer Cadet (ROTP)",
        "min": "18804",
        "median": "19398",
        "max": "19992"
    },
    {
        "label": "OCdt-B",
        "description": "Officer Cadet (OCTP-NFS)",
        "min": "33972",
        "median": "38232",
        "max": "42492"
    },
    {
        "label": "2LT-A",
        "description": "Second Lieutenant (ROTP)",
        "min": "53868",
        "median": "54252",
        "max": "54636"
    },
    {
        "label": "2LT-B",
        "description": "Second Lieutenant (OCTP-NFS)",
        "min": "42816",
        "median": "48408",
        "max": "54000"
    },
    {
        "label": "2LT-C",
        "description": "Second Lieutenant (DEO)",
        "min": "46068",
        "median": "57912",
        "max": "69756"
    },
    {
        "label": "2LT-D",
        "description": "Second Lieutenant (UTP-NCM)",
        "min": "58800",
        "median": "68898",
        "max": "78996"
    },
    {
        "label": "2LT-E",
        "description": "Second Lieutenant (CFR)",
        "min": "59508",
        "median": "69714",
        "max": "79920"
    },
    {
        "label": "LT-A",
        "description": "Lieutenant (ROTP)",
        "min": "58704",
        "median": "64668",
        "max": "70632"
    },
    {
        "label": "LT-B",
        "description": "Lieutenant (OCTP-NFS)",
        "min": "45336",
        "median": "54504",
        "max": "63672"
    },
    {
        "label": "LT-C",
        "description": "Lieutenant (DEO)",
        "min": "50640",
        "median": "60636",
        "max": "70632"
    },
    {
        "label": "LT-D",
        "description": "Lieutenant (UTP-NCM)",
        "min": "60384",
        "median": "74880",
        "max": "89376"
    },
    {
        "label": "LT-E",
        "description": "Lieutenant (CFR)",
        "min": "62712",
        "median": "77796",
        "max": "92880"
    },
    {
        "label": "Capt-JR",
        "description": "Captain (Junior)",
        "min": "74424",
        "median": "80028",
        "max": "85632"
    },
    {
        "label": "Capt-SNR",
        "description": "Captain (Senior)",
        "min": "88296",
        "median": "93330",
        "max": "98364"
    },
    {
        "label": "Maj",
        "description": "Major",
        "min": "100632",
        "median": "106740",
        "max": "112848"
    },
    {
        "label": "LCol",
        "description": "Lieutenant-Colonel",
        "min": "116628",
        "median": "120378",
        "max": "124128"
    },
    {
        "label": "Col",
        "description": "Colonel",
        "min": "133944",
        "median": "141870",
        "max": "149796"
    },
    {
        "label": "BGen",
        "description": "Brigadier-General",
        "min": "158508",
        "median": "165054",
        "max": "171600"
    },
    {
        "label": "MGen",
        "description": "Major-General",
        "min": "181932",
        "median": "197814",
        "max": "213696"
    },
    {
        "label": "LGen",
        "description": "Lieutenant-General",
        "min": "233508",
        "median": "243156",
        "max": "252804"
    },
    {
        "label": "Capt-JR (PLT)",
        "description": "Captain (Junior); Pilot",
        "min": "75432",
        "median": "87894",
        "max": "100356"
    },
    {
        "label": "Capt-SNR (PLT)",
        "description": "Captain (Senior); Pilot",
        "min": "104280",
        "median": "108222",
        "max": "112164"
    },
    {
        "label": "Maj (PLT)",
        "description": "Major; Pilot",
        "min": "113364",
        "median": "116544",
        "max": "119724"
    },
    {
        "label": "LCol (PLT)",
        "description": "Lieutenant-Colonel; Pilot",
        "min": "120900",
        "median": "123546",
        "max": "126192"
    },
    {
        "label": "2LT (MD)",
        "description": "Second Lieutenant; Medical\/Dental",
        "min": "49956",
        "median": "53910",
        "max": "57864"
    },
    {
        "label": "LT (MD)",
        "description": "Lieutenant; Medical\/Dental",
        "min": "61824",
        "median": "63816",
        "max": "65808"
    },
    {
        "label": "Capt (MD)",
        "description": "Captain; Medical\/Dental",
        "min": "128652",
        "median": "156804",
        "max": "184956"
    },
    {
        "label": "Maj (MD)",
        "description": "Major; Medical\/Dental",
        "min": "179832",
        "median": "190068",
        "max": "200304"
    },
    {
        "label": "Maj-S (MD)",
        "description": "Major (Specialist); Medical\/Dental",
        "min": "215796",
        "median": "228078",
        "max": "240360"
    },
    {
        "label": "LCol (MD)",
        "description": "Lieutenant-Colonel; Medical\/Dental",
        "min": "206640",
        "median": "223950",
        "max": "241260"
    },
    {
        "label": "LCol-S (MD)",
        "description": "Lieutenant-Colonel (Specialist); Medical\/Dental",
        "min": "254904",
        "median": "272208",
        "max": "289512"
    },
    {
        "label": "Col (MD)",
        "description": "Colonel; Medical\/Dental",
        "min": "215856",
        "median": "234948",
        "max": "254040"
    },
    {
        "label": "Col-S (MD)",
        "description": "Colonel (Specialist); Medical\/Dental",
        "min": "259032",
        "median": "281940",
        "max": "304848"
    },
    {
        "label": "BGen (MD)",
        "description": "Brigadier-General; Medical\/Dental",
        "min": "228972",
        "median": "249192",
        "max": "269412"
    },
    {
        "label": "Capt (LGL)",
        "description": "Captain; Legal",
        "min": "76812",
        "median": "93198",
        "max": "109584"
    },
    {
        "label": "Maj (LGL)",
        "description": "Major; Legal",
        "min": "117312",
        "median": "135756",
        "max": "154200"
    },
    {
        "label": "LCol (LGL)",
        "description": "Lieutenant-Colonel; Legal",
        "min": "165444",
        "median": "170100",
        "max": "174756"
    },
    {
        "label": "Col (LGL)",
        "description": "Colonel; Legal",
        "min": "189636",
        "median": "204912",
        "max": "220188"
    },
    {
        "label": "BGen (LGL)",
        "description": "Brigadier-General; Legal",
        "min": "185988",
        "median": "206442",
        "max": "226896"
    }
]

;

// National Energy Board rates
// (including Calgary bonus)
// Submitted.
app.rates.neb = [
    {
        "label": "NEB 4",
        "description": "",
        "min": "42816.45",
        "median": "47451.57",
        "max": "52086.69"
    },
    {
        "label": "NEB 5",
        "description": "",
        "min": "48164.70",
        "median": "53451.56",
        "max": "58738.42"
    },
    {
        "label": "NEB 6",
        "description": "",
        "min": "54312.67",
        "median": "60272.26",
        "max": "66231.85"
    },
    {
        "label": "NEB 7",
        "description": "",
        "min": "61375.81",
        "median": "68023.87",
        "max": "74671.93"
    },
    {
        "label": "NEB 8",
        "description": "",
        "min": "69201.93",
        "median": "76697.98",
        "max": "84194.04"
    },
    {
        "label": "NEB 9",
        "description": "",
        "min": "81149.44",
        "median": "89937.95",
        "max": "98726.47"
    },
    {
        "label": "NEB 10",
        "description": "",
        "min": "91492.26",
        "median": "101404.26",
        "max": "111316.27"
    },
    {
        "label": "NEB 11",
        "description": "",
        "min": "100183.17",
        "median": "111036.05",
        "max": "121888.93"
    },
    {
        "label": "NEB 12",
        "description": "",
        "min": "109700.04",
        "median": "121584.58",
        "max": "133469.11"
    },
    {
        "label": "NEB 13",
        "description": "",
        "min": "119852.90",
        "median": "134913.23",
        "max": "149973.55"
    },
    {
        "label": "NEB 14",
        "description": "",
        "min": "134965.70",
        "median": "151862.65",
        "max": "168759.60"
    },
    {
        "label": "NEB 15",
        "description": "",
        "min": "149868.60",
        "median": "168497.23",
        "max": "187125.85"
    },
    {
        "label": "NEB 16",
        "description": "",
        "min": "167500.20",
        "median": "188490.20",
        "max": "209480.20"
    }
]

;

// GNWT Salary rates
// (not including northern living)
// From: http://www.hr.gov.nt.ca/resources/position-salary-information/salary-ranges, 2017-06-19
app.rates.gnwt = [
 {
   "label": "UNW01",
   "description": "",
   "min": "46878.00",
   "max": "55965.00",
   "median": "51421.50"
 },
 {
   "label": "UNW02",
   "description": "",
   "min": "48633.00",
   "max": "58071.00",
   "median": "53352.00"
 },
 {
   "label": "UNW03",
   "description": "",
   "min": "50622.00",
   "max": "60450.00",
   "median": "55536.00"
 },
 {
   "label": "UNW04",
   "description": "",
   "min": "52514.00",
   "max": "62673.00",
   "median": "57593.50"
 },
 {
   "label": "UNW05",
   "description": "",
   "min": "54561.00",
   "max": "65111.00",
   "median": "59836.00"
 },
 {
   "label": "UNW06",
   "description": "",
   "min": "56492.00",
   "max": "67412.00",
   "median": "61952.00"
 },
 {
   "label": "UNW07",
   "description": "",
   "min": "58559.00",
   "max": "69908.00",
   "median": "64233.50"
 },
 {
   "label": "UNW08",
   "description": "",
   "min": "60762.00",
   "max": "72540.00",
   "median": "66651.00"
 },
 {
   "label": "UNW09",
   "description": "",
   "min": "62946.00",
   "max": "75153.00",
   "median": "69049.50"
 },
 {
   "label": "UNW10",
   "description": "",
   "min": "65208.00",
   "max": "77864.00",
   "median": "71536.00"
 },
 {
   "label": "UNW11",
   "description": "",
   "min": "67607.00",
   "max": "80691.00",
   "median": "74149.00"
 },
 {
   "label": "UNW12",
   "description": "",
   "min": "72677.00",
   "max": "86775.00",
   "median": "79726.00"
 },
 {
   "label": "UNW13",
   "description": "",
   "min": "76011.00",
   "max": "90753.00",
   "median": "83382.00"
 },
 {
   "label": "UNW14",
   "description": "",
   "min": "79658.00",
   "max": "95102.00",
   "median": "87380.00"
 },
 {
   "label": "UNW15",
   "description": "",
   "min": "83363.00",
   "max": "99509.00",
   "median": "91436.00"
 },
 {
   "label": "UNW16",
   "description": "",
   "min": "87263.00",
   "max": "104208.00",
   "median": "95735.50"
 },
 {
   "label": "UNW17",
   "description": "",
   "min": "91358.00",
   "max": "109064.00",
   "median": "100211.00"
 },
 {
   "label": "UNW18",
   "description": "",
   "min": "95589.00",
   "max": "114134.00",
   "median": "104861.50"
 },
 {
   "label": "UNW19",
   "description": "",
   "min": "100016.00",
   "max": "119418.00",
   "median": "109717.00"
 },
 {
   "label": "UNW20",
   "description": "",
   "min": "104618.00",
   "max": "124898.00",
   "median": "114758.00"
 },
 {
   "label": "UNW21",
   "description": "",
   "min": "109493.00",
   "max": "130709.00",
   "median": "120101.00"
 },
 {
   "label": "UNW22",
   "description": "",
   "min": "114524.00",
   "max": "136715.00",
   "median": "125619.50"
 },
 {
   "label": "UNW23",
   "description": "",
   "min": "119789.00",
   "max": "143013.00",
   "median": "131401.00"
 },
 {
   "label": "UNW24",
   "description": "",
   "min": "125229.00",
   "max": "149526.00",
   "median": "137377.50"
 },
 {
   "label": "UNW25",
   "description": "",
   "min": "131001.00",
   "max": "156410.00",
   "median": "143705.50"
 },
 {
   "label": "EXC01",
   "description": "",
   "min": "46878.00",
   "max": "55965.00",
   "median": "51421.50"
 },
 {
   "label": "EXC02",
   "description": "",
   "min": "48633.00",
   "max": "58071.00",
   "median": "53352.00"
 },
 {
   "label": "EXC03",
   "description": "",
   "min": "50622.00",
   "max": "60450.00",
   "median": "55536.00"
 },
 {
   "label": "EXC04",
   "description": "",
   "min": "52514.00",
   "max": "62673.00",
   "median": "57593.50"
 },
 {
   "label": "EXC05",
   "description": "",
   "min": "54561.00",
   "max": "65111.00",
   "median": "59836.00"
 },
 {
   "label": "EXC06",
   "description": "",
   "min": "56492.00",
   "max": "67412.00",
   "median": "61952.00"
 },
 {
   "label": "EXC07",
   "description": "",
   "min": "58559.00",
   "max": "69908.00",
   "median": "64233.50"
 },
 {
   "label": "EXC08",
   "description": "",
   "min": "60762.00",
   "max": "72540.00",
   "median": "66651.00"
 },
 {
   "label": "EXC09",
   "description": "",
   "min": "62946.00",
   "max": "75153.00",
   "median": "69049.50"
 },
 {
   "label": "EXC10",
   "description": "",
   "min": "65208.00",
   "max": "77864.00",
   "median": "71536.00"
 },
 {
   "label": "EXC11",
   "description": "",
   "min": "67607.00",
   "max": "80691.00",
   "median": "74149.00"
 },
 {
   "label": "EXC12",
   "description": "",
   "min": "72677.00",
   "max": "86775.00",
   "median": "79726.00"
 },
 {
   "label": "EXC13",
   "description": "",
   "min": "76011.00",
   "max": "90753.00",
   "median": "83382.00"
 },
 {
   "label": "EXC14",
   "description": "",
   "min": "79658.00",
   "max": "95102.00",
   "median": "87380.00"
 },
 {
   "label": "EXC15",
   "description": "",
   "min": "83363.00",
   "max": "99509.00",
   "median": "91436.00"
 },
 {
   "label": "EXC16",
   "description": "",
   "min": "87263.00",
   "max": "104208.00",
   "median": "95735.50"
 },
 {
   "label": "EXC17",
   "description": "",
   "min": "91358.00",
   "max": "109064.00",
   "median": "100211.00"
 },
 {
   "label": "EXC18",
   "description": "",
   "min": "95589.00",
   "max": "114134.00",
   "median": "104861.50"
 },
 {
   "label": "EXC19",
   "description": "",
   "min": "100016.00",
   "max": "119418.00",
   "median": "109717.00"
 },
 {
   "label": "EXC20",
   "description": "",
   "min": "104618.00",
   "max": "124898.00",
   "median": "114758.00"
 },
 {
   "label": "EXC21",
   "description": "",
   "min": "109493.00",
   "max": "130709.00",
   "median": "120101.00"
 },
 {
   "label": "EXC22",
   "description": "",
   "min": "114524.00",
   "max": "136715.00",
   "median": "125619.50"
 },
 {
   "label": "EXC23",
   "description": "",
   "min": "119789.00",
   "max": "143013.00",
   "median": "131401.00"
 },
 {
   "label": "EXC24",
   "description": "",
   "min": "125229.00",
   "max": "149526.00",
   "median": "137377.50"
 },
 {
   "label": "EXC25",
   "description": "",
   "min": "131001.00",
   "max": "156410.00",
   "median": "143705.50"
 },
 {
   "label": "SRM01",
   "description": "",
   "min": "91046.00",
   "max": "130065.00",
   "median": "110555.50"
 },
 {
   "label": "SRM02",
   "description": "",
   "min": "94595.00",
   "max": "135135.00",
   "median": "114865.00"
 },
 {
   "label": "SRM03",
   "description": "",
   "min": "96954.00",
   "max": "138509.00",
   "median": "117731.50"
 },
 {
   "label": "SRM04",
   "description": "",
   "min": "100718.00",
   "max": "143871.00",
   "median": "122294.50"
 },
 {
   "label": "SRM05",
   "description": "",
   "min": "105690.00",
   "max": "150989.00",
   "median": "128339.50"
 },
 {
   "label": "SRM06",
   "description": "",
   "min": "109493.00",
   "max": "156410.00",
   "median": "132951.50"
 },
 {
   "label": "SRM07",
   "description": "",
   "min": "113412.00",
   "max": "162006.00",
   "median": "137709.00"
 },
 {
   "label": "SRM08",
   "description": "",
   "min": "117546.00",
   "max": "167915.00",
   "median": "142730.50"
 },
 {
   "label": "SRM09",
   "description": "",
   "min": "121797.00",
   "max": "173999.00",
   "median": "147898.00"
 },
 {
   "label": "SRM10",
   "description": "",
   "min": "126185.00",
   "max": "180258.00",
   "median": "153221.50"
 },
 {
   "label": "SRM11",
   "description": "",
   "min": "130709.00",
   "max": "186732.00",
   "median": "158720.50"
 },
 {
   "label": "SRM12",
   "description": "",
   "min": "135369.00",
   "max": "193382.00",
   "median": "164375.50"
 },
 {
   "label": "SRM13",
   "description": "",
   "min": "140147.00",
   "max": "200070.00",
   "median": "170108.50"
 },
 {
   "label": "SRM14",
   "description": "",
   "min": "145080.00",
   "max": "207246.00",
   "median": "176163.00"
 },
 {
   "label": "SRM15",
   "description": "",
   "min": "150228.00",
   "max": "214598.00",
   "median": "182413.00"
 },
 {
   "label": "SRM16",
   "description": "",
   "min": "155552.00",
   "max": "222222.00",
   "median": "188887.00"
 },
 {
   "label": "SRM17",
   "description": "",
   "min": "161246.00",
   "max": "230354.00",
   "median": "195800.00"
 },
 {
   "label": "SRM18",
   "description": "",
   "min": "167291.00",
   "max": "238992.00",
   "median": "203141.50"
 },
 {
   "label": "SRM19",
   "description": "",
   "min": "173570.00",
   "max": "247943.00",
   "median": "210756.50"
 },
 {
   "label": "SRM20",
   "description": "",
   "min": "180083.00",
   "max": "257264.00",
   "median": "218673.50"
 },
 {
   "label": "SRM21",
   "description": "",
   "min": "184665.00",
   "max": "263816.00",
   "median": "224240.50"
 }
]

;
