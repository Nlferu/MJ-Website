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
    { name: "Spoti" },
    { name: "Enova" },
    { name: "Symfonia" },
    { name: "Płatnik" },
    { name: "SAP" },
    { name: "Optima" },
    { name: "Microsoft Office", icon: "/skills/Microsoft_Office_logo.png" },
] as const

export const experienceData = [
    {
        title: "Education",
        location: "Cracow University of Economics",
        description:
            "I graduated after 3 years of studying Finance and Accounting with a specialization in Financial Markets. I then continued my studies for the next 2 years, focusing on Investment Advisory specialization.",
        icon: "/experience/uek.jpg",
        date: "2013-2018",
    },
    {
        title: "Accountant",
        location: "Kander",
        description:
            "Immediately after my graduation, I found a job as a derivatives specialist. I reconciled and processed transactions for institutional clients funds.",
        icon: "/experience/kander.png",
        date: "2016-2018",
    },
    {
        title: "Senior Accountant",
        location: "Shell",
        description: "Currently I'm working as senior specialist managing fund mergers, client onboardings and transfers of securities into custody.",
        icon: "/experience/shell.png",
        date: "2018-2020",
    },
    {
        title: "Office Manager",
        location: "Meritoros",
        description:
            "I am also a full-stack developer working as a freelancer. My stack includes Solidity, Python, JavaScript, MQL5, React, Next.js, and more. I am open to full-time opportunities.",
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
