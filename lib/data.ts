export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const

export const skills = [
    { name: "Spoti", icon: "/skills/spoti.jpg" },
    { name: "Enova", icon: "/skills/enova.png" },
    { name: "Symfonia", icon: "/skills/symfonia.jpg" },
    { name: "Płatnik", icon: "/skills/platnik.jpeg" },
    { name: "SAP", icon: "/skills/sap.gif" },
    { name: "Optima", icon: "/skills/spoti.jpg" },
    { name: "MS Office", icon: "/skills/msOffice.png" },
] as const

export const educationData = [
    {
        school: "Cracow University of Economics",
        title: "Bachelor & Master",
        icon: "/experience/uek.jpg",
        date: "2013-2018",
    },
] as const

export const experienceData = [
    {
        title: "Kander",
        position: "Accountant",
        icon: "/experience/kander.png",
        date: "2016-2018",
    },
    {
        title: "Shell",
        position: "Accountant & Senior Accountant",
        icon: "/experience/shell.png",
        date: "2018-2020",
    },
    {
        title: "Meritoros",
        position: "Accountant & Office Manager",
        icon: "/experience/meritoros.jpg",
        date: "2020-present",
    },
] as const

export const certificates = [
    { title: "Kadry i płace od podstaw", issuer: "Tax Consilium Sp. z o.o.", date: "Issued: Apr 2019" },
    { title: "Specjalista ds.Podatkowych: PIT, CIT, VAT, PCC", issuer: "Tax Consilium Sp. z o.o.", date: "Issued: Dec 2019" },
    {
        title: "Specjalista ds. rachunkowości (kod zawodu - 241103)",
        issuer: "Stowarzyszenie Księgowych w Polsce Oddział Okręgowy w Katowicach",
        date: "Issued: XXX 2022",
    },
]
