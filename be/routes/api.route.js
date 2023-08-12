const express = require("express");
const sql = require("../services/planboard.services");

const router = express.Router();

router.get("/get-depot", function (req, res) {
  const Wgt_Depotwise_Data = [
    {
      id: 1,
      depot: "Delhi-Naraina",
      territorys: "6",
      dealers: "116",
      wt: "10",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
    {
      id: 2,
      depot: "Ambala",
      territorys: "5",
      dealers: "146",
      ly: "100",
      wt: "7",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },

    {
      id: 3,
      depot: "Gurgaon",
      territorys: "5",
      dealers: "146",
      ly: "100",
      wt: "3",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },

    {
      id: 4,
      depot: "Jalandhar",
      territorys: "5",
      dealers: "146",
      ly: "100",
      wt: "6",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },

    {
      id: 5,
      depot: "Jammu",
      territorys: "5",
      dealers: "146",
      ly: "100",
      wt: "4",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },

    {
      id: 6,
      depot: "Ludhiana",
      territorys: "5",
      dealers: "146",
      ly: "100",
      wt: "5",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },

    {
      id: 7,
      depot: "Nebsarai",
      territorys: "5",
      dealers: "146",
      ly: "100",
      wt: "15",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },

    {
      id: 8,
      depot: "Zirakpur [Himachal]",
      territorys: "5",
      dealers: "146",
      ly: "100",
      wt: "11",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },

    {
      id: 9,
      depot: "Zirakpur",
      territorys: "5",
      dealers: "146",
      ly: "100",
      wt: "9",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
  ];

  res.send(Wgt_Depotwise_Data);
});

router.get("/get-terriotry", function (req, res) {
  const Wgt_Territory_Data = [
    {
      id: 1,
      depot: "HO2",
      dealers: "116",
      wt: "9",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
    {
      id: 2,
      depot: "HO4",
      dealers: "116",
      wt: "9",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
    {
      id: 3,
      depot: "HO7",
      dealers: "116",
      wt: "9",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
  ];

  res.send(Wgt_Territory_Data);
});

router.get("/get-rule", function (req, res) {
  const tableBody = [
    {
      id: 1,
      name: "LLY Topup ( Increment)",
      status: true,
    },
    {
      id: 2,
      name: "LLY Topup ( Increment)",
      status: false,
    },
    {
      id: 3,
      name: "Potential  ( Increment)",
      status: false,
    },
    {
      id: 4,
      name: "Seasonal Time Months ( Festival.. ) ",
      status: false,
    },
    {
      id: 5,
      name: "LLY Topup ( Increment)",
      status: false,
    },
  ];

  res.send(tableBody);
});

router.get("/get-zone", function (req, res) {
  const Wgt_Zone_Data = [
    {
      id: 1,
      title: "North",
      bg: "w3-red",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },

    {
      id: 2,
      title: "South",
      bg: "w3-indigo",
      ly: "90",
      target: "110",
      target_percentage: "26",
      achieved: "26",
      achieved_percentage: "12",
    },
    {
      id: 3,
      title: "East",
      bg: "w3-teal",
      ly: "110",
      target: "130",
      target_percentage: "26",
      achieved: "40",
      achieved_percentage: "12",
    },
    {
      id: 3,
      title: "West",
      bg: "w3-orange",
      ly: "130",
      target: "160",
      target_percentage: "26",
      achieved: "80",
      achieved_percentage: "12",
    },
  ];

  res.send(Wgt_Zone_Data);
});

router.get("/get-zone-area", function(req, res){
    const zoneArea = [
        {
          id: 1,
          name: "North",
        },
        {
          id: 2,
          name: "South",
        },
        {
          id: 3,
          name: "East",
        },
        {
          id: 4,
          name: "West",
        },
    ];
    res.send(zoneArea)
})

router.get("/get-state", function (req, res) {
  const Wgt_Statewise_Data = [
    {
      id: 1,
      state: "Delhi",
      bg: "w3-red",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
    {
      id: 2,
      state: "Haryana",
      bg: "w3-red",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
    {
      id: 3,
      state: "Punjab",
      bg: "w3-red",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },

    {
      id: 4,
      state: "Himachal",
      bg: "w3-red",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
    {
      id: 5,
      state: "J&K",
      bg: "w3-red",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
    {
      id: 6,
      state: "Uttrakhand",
      bg: "w3-red",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
    {
      id: 7,
      state: "Uttar Pradesh",
      bg: "w3-red",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
    {
      id: 8,
      state: "Rajasthan",
      bg: "w3-red",
      ly: "100",
      target: "126",
      target_percentage: "26",
      achieved: "60",
      achieved_percentage: "12",
    },
  ];

  res.send(Wgt_Statewise_Data);
});

router.get("/get-north-dealer", function (req, res) {
  const dealerData = [
    {
      id: 1,
      name: "Shanti Paints  - Rohtak",
    },
    {
      id: 2,
      name: "Kamal  Enterprise - Rohtak ",
    },
    {
      id: 3,
      name: "Shanti Paints - Jhajjar ",
    },
    {
      id: 4,
      name: "..",
    },
  ];

  res.send(dealerData);
});

router.get("/get-north-depo", function (req, res) {
  const depoData = [
    {
      id: 1,
      name: "Ambala",
    },
    {
      id: 2,
      name: "Delhi-Naraina",
    },
    {
      id: 3,
      name: "Jalandhar",
    },
    {
      id: 4,
      name: "..",
    },
  ];

  res.send(depoData);
});
router.get("/get-north-terriotry", function (req, res) {
  const territoryData = [
    {
      id: 1,
      name: "H04",
    },
    {
      id: 2,
      name: "H05",
    },
    {
      id: 3,
      name: "H06",
    },
    {
      id: 4,
      name: "..",
    },
  ];

  res.send(territoryData);
});

router.get("/get-north-plans", function (req, res) {
  const plansData = [
    {
      id: 1,
      name: "OS / OD / Collection Plan",
    },
    {
      id: 2,
      name: "Activity Plan ",
    },
    {
      id: 3,
      name: "Other ",
    },
  ];

  res.send(plansData);
});

module.exports = router;
