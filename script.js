/* =========================================================
   LOAD BUSINESS DATA
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       BASIC
    ========================= */

    document.title = businessData.name;

    document.getElementById("businessName").textContent =
        businessData.name;

    document.getElementById("footerName").textContent =
        businessData.name;

    document.getElementById("businessDescription").textContent =
        businessData.description;

    document.getElementById("businessCity").textContent =
        businessData.city;


    /* =========================
       IMAGES
    ========================= */

    document.getElementById("logoImage").src =
        businessData.logo;

    document.getElementById("coverImage").src =
        businessData.cover;


    /* =========================
       PHONE
    ========================= */

    const phoneClean =
        businessData.phone.replace(/\s+/g, "");

    document.getElementById("phoneNumber").textContent =
        businessData.phone;

    document.getElementById("callLink").href =
        `tel:${phoneClean}`;

    document.getElementById("phoneBtn").href =
        `tel:${phoneClean}`;


    /* =========================
       WHATSAPP
    ========================= */

    const whatsappURL =
        `https://wa.me/${businessData.whatsapp}`;

    document.getElementById("whatsappNumber").textContent =
        "+" + businessData.whatsapp;

    document.getElementById("whatsappLink").href =
        whatsappURL;

    document.getElementById("whatsappBtn").href =
        whatsappURL;


    /* =========================
       INSTAGRAM
    ========================= */

    document.getElementById("instagramBtn").href =
        businessData.instagram;

    document.getElementById("instagramLink").href =
        businessData.instagram;


    /* =========================
       FACEBOOK
    ========================= */

    document.getElementById("facebookBtn").href =
        businessData.facebook;

    document.getElementById("facebookLink").href =
        businessData.facebook;


    /* =========================
       LOCATION
    ========================= */

    document.getElementById("address").textContent =
        businessData.address;

    document.getElementById("addressDetails").textContent =
        businessData.addressDetails;

    document.getElementById("mapsBtn").href =
        businessData.maps;


    /* =========================
       GOOGLE REVIEW
    ========================= */

    document.getElementById("reviewBtn").href =
        businessData.review;


    /* =========================
       ADD CONTACT
    ========================= */

    document
        .getElementById("saveContactBtn")
        .addEventListener("click", saveContact);


    /* =========================================================
       SAVE CONTACT
    ========================================================= */

    function saveContact() {

        const contact = businessData.contact;

        /*
         * vCard
         * بدون URL ديال الموقع
         */

        const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${contact.firstName} ${contact.lastName}
N:${contact.lastName};${contact.firstName};;;
ORG:${contact.organization}
TEL;TYPE=CELL:${contact.phone}
END:VCARD
`;

        const blob = new Blob(
            [vCard.trim()],
            {
                type: "text/vcard;charset=utf-8"
            }
        );

        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download =
            `${contact.firstName}-${contact.lastName}.vcf`;

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(url);
    }

});