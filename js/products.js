document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productID = urlParams.get("product");

    const products = {
        gd1: {
            title: "Hiphop Culture T-Shirt",
            price: "Rs. 2,295.00",
            description: "This design is inspired by ‘the hip-hop culture’. It depicts the art of self- realization, Vibrant Energy, Calmness. And the art to BꓤEATHE freely.",
            images: [
                "images/gd1-1.webp",
                "images/gd1-2.webp",
                "images/gd1-3.webp",
                "images/gd1-4.webp"
            ],
            specs: [
                "100% COTTON LYCRA",
                "WEIGHT : 220 GSM",
                "DROP SHOULDER",
                "ROUNDED PROFILE (UNISEX)",
                "PUFF | SCREEN PRINT",
                "REVERSE WASH ONLY"
            ]
        },
        gd2: {
            title: "LUVER BOY",
            price: "Rs. 3,999.00",
            description: "Bringing one of our bestsellers back for V-Day. This premium tee features a plush towel-print in elegant cursive, surrounded by striking red silicone hearts. Soft, bold, and irresistibly charming— just like you, cause boys deserve pampering too!",
            images: [
                "images/gd2-1.webp",
                "images/gd2-2.webp",
                "images/gd2-3.webp",
                "images/gd2-4.webp"
            ],
            specs: [
                "100% ORGANIC COTTON",
                "WEIGHT : 200 GSM",
                "COMFORT FIT",
                "SOFT PRINT",
                "MACHINE WASH SAFE"
            ]
        },
        gd4: {
            title: "Ocean Lady T-Shirt",
            price: "Rs. 2,295.00",
            description: "This Tee was inspired by the 2023 art practice of Giving back to society and humanity. From generations to generations we have been using the resources from society in multiple ways which are in danger for the coming generations. It's time to look after and care for our environment THROUGH | TOGETHER | INTO YOU. Our bestselling tee is cut from our signature 240gsm cotton terry to ensure a structural fit.",
            images: [
                "images/gd4-1.webp",
                "images/gd4-2.webp",
                "images/gd4-3.webp",
                "images/gd4-4.webp"
            ],
            specs: [
                "100% ORGANIC COTTON",
                "WEIGHT : 200 GSM",
                "COMFORT FIT",
                "SOFT PRINT",
                "MACHINE WASH SAFE"
            ]
        },
        gd5: {
            title: "DEAD SHERIFF T-SHIRT",
            price: "Rs. 3,999.00",
            description: "Axes, Cactuses, Dead Sheriff in his country hat, captures the essence of frontier justice with a touch of rugged charm. For exploring the outdoors or hitting the urban trails the Dead Sheriff T-Shirt will be your ideal companion. Each T-shirt is custom hand spray painted.",
            images: [
                "images/gd5-1.webp",
                "images/gd5-2.webp",
                "images/gd5-3.webp",
                "images/gd5-4.webp"
            ],
            specs: [
                "100% ORGANIC COTTON",
                "WEIGHT : 200 GSM",
                "COMFORT FIT",
                "SOFT PRINT",
                "MACHINE WASH SAFE"
            ]
        },
        p1: {
            title: "Amidst the Chaos T-Shirt",
            price: "Rs. 2,000.00",
            description: "Amidst this cacophony of activity, it's easy to feel lost, overwhelmed by the relentless pace of life. In the midst of such chaos, it's vital to find moments of stillness, to carve out oases of calm in the storm. It's in these quiet interludes that we can pause, Breathe in , and collect our thoughts, reclaiming a sense of clarity and purpose amidst the chaos : through | together | into you .",
            images: [
                "images/p1-1.webp",
                "images/p1-2.webp",
                "images/p1-3.webp",
                "images/p1-4.webp"
            ],
            specs: [
                "100% cotton lycra",
                "WEIGHT : 220 GSM",
                "Drop shoulder",
                "Rounded profile (Unisex)",
                "Puff | screen print",
                "Reverse wash only"
            ]
        },
        p2: {
            title: "LOVE CODE'S",
            price: "Rs. 3,750.00",
            description: "Unofficially yours, but undeniably stylish! This black tee, with vibrant red and white embroidered patches, turns romance into a wearable statement.",
            images: [
                "images/p2-1.webp",
                "images/p2-2.webp",
                "images/p2-3.webp",
                "images/p2-4.webp"
            ],
            specs: [
                "MATERIAL: KNITTED TENCEL WITH SPANDEX",
                "WEIGHT : 300 GSM",
                "boxy FIT",
                "EMBROIDERED ARTWORK ON THE FRONT (unisex)",
                "REVERSE DIP WASH OR DRY CLEAN"
            ]
        },
        p3: {
            title: "Elite’s Club T-Shirt",
            price: "Rs. 2,000.00",
            description: "Introducing the elites’ club collection , a range inspired by the ”elites’ of the society” where like- minded individuals can share their determination & passions. We branded elites’ club to be “ powered by sustainability”, to create garments which are breathable , ultra soft & comfy, which can be worn to acknowledge their passion for the environment and having to give back to society.This t-shirt is an signature BꓤEATHE essential silhouette, in day-light colourways, crafted only for the elite members of the club.",
            images: [
                "images/p3-1.webp",
                "images/p3-2.webp",
                "images/p3-3.webp",
                "images/p3-4.webp"
            ],
            specs: [
                "95% cotton + 5 % spandex",
                "Weight : 220 gsm ultra soft",
                "Drop shoulder",
                "Rounded profile (unisex)",
                "Puff | screen print",
                "Reverse wash only"
            ]
        },
        p4: {
            title: "NO BROOM T-SHIRT",
            price: "Rs. 3,750.00",
            description: "Featuring a cute cat sporting a witch hat, this shirt adds a touch of whimsy to your spooky season. With the fun tagline, embroidered at the back, it's perfect for those who love a little mischief with their magic",
            images: [
                "images/p4-1.webp",
                "images/p4-2.webp",
                "images/p4-3.webp",
                "images/p4-4.webp"
            ],
            specs: [
                "Material: Knitted Tencel with Spandex",
                "WEIGHT : 300 GSM",
                "boxy FIT",
                "Caviar Seed Print on the Back",
                "Care: Dip wash or dry clean only; machine washing is a no-no! Prints may develop a unique flair as time goes by.",
                "No Ironing on the Print"
            ]
        },
        p5: {
            title: "TBM Co-ord Set Black",
            price: "Rs. 3,999.00",
            description: "INSPIRED BY THE EXAGGERATED BOXY CUT OF 90s OUT OF THE BOX YET SUBTLE SILHOUETTE, WARM- UP DRILL TOPS & STRAIGHT LEG DRILL SWEATPANTS WHICH CAN BE FOUND IN SPORTING ERAS GONE BY. OUR NEW CUSTOM IN HOUSE DEVELOPED FABRIC FROM IMPORTED CORD LYCRA YARN, IT IS LIKE NOTHING WE’VE EVER FELT BEFORE. THIS IS INDEED THE MOST COMFY, BAGGY, AND GO TO RESORT AND AIRPORT LOOK. THIS BAGGY WIDE-LEG PANTS & TOP IS FINISHED WITH OUR “THEBꓤEATHEMOVEMENT” LABEL FOR BRANDING.",
            images: [
                "images/p5-1.webp",
                "images/p5-2.webp",
                "images/p5-3.webp",
                "images/p5-4.webp"
            ],
            specs: [
                "100% LUXURY IMPORTED RIBBED COTTON LYCRA",
                "WEIGHT : 200 GSM cord",
                "DRILL STYLE COLLAR & STRAIGHT LEG",
                "TRIPLE TIER ELASTIC WAISTBAND FOR OPTIMUM COMFORT.",
                "WIDE PROFILE | RELAXED & BOXY FIT"
            ]
        },
        p6: {
            title: "Lioness T-Shirt",
            price: "Rs. 2,495.00",
            description: "Picture yourself roaming the urban jungle, adorned in this majestic depiction of the noble lioness, her piercing gaze emanating confidence and poise. Rendered in exquisite detail, every stroke of the artist's brush captures the essence of the lioness's regal demeanor, her mane flowing gracefully in the wind, a symbol of her untamed spirit. The Pause in front is a perfect symbol of your untamed courage and unwavering confidence.",
            images: [
                "images/p6-1.webp",
                "images/p6-2.webp",
                "images/p6-3.webp",
                "images/p6-4.webp"
            ],
            specs: [
                "100% cotton",
                "WEIGHT : 260 GSM",
                "Drop shoulder",
                "Rounded profile (Unisex)",
                "Puff print",
                "Reverse wash only"
            ]
        },
        p7: {
            title: "BASIC : BLACK",
            price: "Rs. 2,499.00",
            description: "Explore the BꓤEATHE basics, a blend of simplicity and comfort, elevating minimalism & ideal for everyday wear. Available in 7 solid colours, with embossed branding on the front and HD print NG logo on the back, these are a wardrobe staple.",
            images: [
                "images/p7-1.webp",
                "images/p7-2.webp",
                "images/p7-3.webp",
                "images/p7-4.webp"
            ],
            specs: [
                "MATERIAL: 97% COTTON & 3% SPANDEX",
                "WEIGHT : 250 GSM",
                "relaxed FIT",
                "Wash Care: Reverse wash or dry clean only; machine washing is a no-no! Prints may develop a unique flair as time goes by",
                "No Ironing on the embossing or the print"
            ]
        },
        p8: {
            title: "TBM Co-ord Set",
            price: "Rs. 3,999.00",
            description: "INSPIRED BY THE EXAGGERATED BOXY CUT OF 90s OUT OF THE BOX YET SUBTLE SILHOUETTE, QUARTER-ZIP SWEATSHIRT & STRAIGHT LEG DRILL SWEATPANTS WHICH CAN BE FOUND IN SPORTING ERAS GONE BY. OUR NEW CUSTOM IN HOUSE DEVELOPED FABRIC FROM IMPORTED CORD YARN, IT IS LIKE NOTHING WE’VE EVER FELT BEFORE. THIS IS INDEED THE MOST COMFY, BAGGY, AND GO TO RESORT AND AIRPORT LOOK.",
            images: [
                "images/p8-1.webp",
                "images/p8-2.webp",
                "images/p8-3.webp",
                "images/p8-4.webp"
            ],
            specs: [
                "100% LUXURY IMPORTED RIBBED COTTON LYCRA (Unisex)",
                "WEIGHT : 200 GSM cord",
                "DRILL STYLE COLLAR & STRAIGHT LEG",
                "TRIPLE TIER ELASTIC WAISTBAND FOR OPTIMUM COMFORT.",
                "WIDE PROFILE | RELAXED & BOXY FIT"
            ]
        },
        p9: {
            title: "ROSE BLOOM SHIRT",
            price: "Rs. 3,999.00",
            description: "Dripping in poetic elegance, this pastel pink button-up is one, where the embroidered rose on your heart does all the talking. The organza pocket adds a touch of sophistication, perfect for a date night.",
            images: [
                "images/p9-1.webp",
                "images/p9-2.webp",
                "images/p9-3.webp",
                "images/p9-4.webp"
            ],
            specs: [
                "MATERIAL: BANANA CREPe",
                "relaxed FIT",
                "SOFT PRINT",
                "HALF SLEEVES",
                "HEART BUTTON DETAIL",
                "ORGANZA POCKET",
                "EMBROIDERED ROSE ARTWORK ON THE FRONT (unisex)",
                "BRANDING ENGRAVED BUTTONS",
                "MACHINE wash/ Hand-Dip wash/ Dry Clean"
            ]
        },
        p10: {
            title: "MY BROTHER'S HOODIE",
            price: "Rs. 5,999.00",
            description: "Featuring a striking design of fierce fiery eyes and a dynamic dragon, this greyscale monotone piece captures the thrill of adventure and the spirit of passion, emboding a sense of power and excitement. INSTANT SHIPPING!",
            images: [
                "images/p10-1.webp",
                "images/p10-2.webp",
                "images/p10-3.webp",
                "images/p10-4.webp"
            ],
            specs: [
                "Material: Pure Cotton fleece",
                "WEIGHT : 400 GSM",
                "boxy FIT",
                "HD Print on the Front and Pearled Rivets on both sleeves",
                "Care: Dry Clean only"
            ]
        },
        p11: {
            title: "THE SAINT HOODIE",
            price: "Rs. 5,999.00",
            description: "The angel’s ethereal presence draws you in, radiating a sense of magic and mystery. With intricate details that tell a story of transformation and hope, this hoodie serves as a powerful reminder that beauty can arise from chaos.",
            images: [
                "images/p11-1.webp",
                "images/p11-2.webp",
                "images/p11-3.webp",
                "images/p11-4.webp"
            ],
            specs: [
                "Material: Pure Cotton fleece",
                "WEIGHT : 400 GSM",
                "boxy FIT",
                "10 Lakh stitches embroidery on the back with distressed mesh.",
                "Rivets on the Kangaroo Pocket",
                "Care: Dry Clean only"
            ]
        },
        p12: {
            title: "DEAD SHERIFF T-SHIRT",
            price: "Rs. 3,999.00",
            description: "Axes, Cactuses, Dead Sheriff in his country hat, captures the essence of frontier justice with a touch of rugged charm. For exploring the outdoors or hitting the urban trails the Dead Sheriff T-Shirt will be your ideal companion. Each T-shirt is custom hand spray painted",
            images: [
                "images/p12-1.jpg",
                "images/p12-2.jpg",
                "images/p12-3.jpg",
                "images/p12-4.jpg"
            ],
            specs: [
                "100% ORGANIC COTTON",
                "WEIGHT : 200 GSM",
                "COMFORT FIT",
                "SOFT PRINT",
                "MACHINE WASH SAFE"
            ]
        },
        p13: {
            title: "lion T-SHIRT",
            price: "Rs. 3,999.00",
            description: "Axes, Cactuses, Dead Sheriff in his country hat, captures the essence of frontier justice with a touch of rugged charm. For exploring the outdoors or hitting the urban trails the Dead Sheriff T-Shirt will be your ideal companion. Each T-shirt is custom hand spray painted",
            images: [
                "images/p13-1.jpg",
                "images/p13-2.jpg",
                "images/p13-3.jpg",
                "images/p13-4."
            ],
            specs: [
                "100% ORGANIC COTTON",
                "WEIGHT : 200 GSM",
                "COMFORT FIT",
                "SOFT PRINT",
                "MACHINE WASH SAFE"
            ]
        },
        p14: {
            title: "Elite’s Club T-Shirt",
            price: "Rs. 2,000.00",
            description: "Introducing the elites’ club collection , a range inspired by the ”elites’ of the society” where like- minded individuals can share their determination & passions. We branded elites’ club to be “ powered by sustainability”, to create garments which are breathable , ultra soft & comfy, which can be worn to acknowledge their passion for the environment and having to give back to society.This t-shirt is an signature BꓤEATHE essential silhouette, in day-light colourways, crafted only for the elite members of the club.",
            images: [
                "images/p14-1.webp",
                "images/p14-2.webp",
                "images/p14-3.webp",
                "images/p14-4.webp"
            ],
            specs: [
                "95% cotton + 5 % spandex",
                "WEIGHT : 200 GSM ultra soft",
                "DROP SHOULDER",
                "ROUNDED PROFILE (UNISEX)",
                "PUFF | SCREEN PRINT",
                "REVERSE WASH ONLY"
            ]
        },
        p15: {
            title: "CLOUD NINE LINEN SHIRT",
            price: "Rs. 4,850.00",
            description: "Axes, Cactuses, Dead Sheriff in his country hat, captures the essence of frontier justice with a touch of rugged charm. For exploring the outdoors or hitting the urban trails the Dead Sheriff T-Shirt will be your ideal companion. Each T-shirt is custom hand spray painted",
            images: [
                "images/p15-1.webp",
                "images/p15-2.webp",
                "images/p15-3.webp",
                "images/p15-4.webp"
            ],
            specs: [
                "Material: Premium Cotton Linen",
                "relaxed FIT",
                "Embroidered Artwork on the back",
                "Branding engraved buttons",
                "Care: Cold Gentle Dip wash with like colours or Dry Clean.",
                "Do Not Flat Iron on the embroidered design."
            ]
        },
        p16: {
            title: "TBM CORD SET BISCUIT",
            price: "Rs. 3,999.00",
            description: "INSPIRED BY THE EXAGGERATED BOXY CUT OF 90s OUT OF THE BOX YET SUBTLE SILHOUETTE, QUARTER-ZIP SWEATSHIRT & STRAIGHT LEG DRILL SWEATPANTS WHICH CAN BE FOUND IN SPORTING ERAS GONE BY. OUR NEW CUSTOM IN HOUSE DEVELOPED FABRIC FROM IMPORTED CORD YARN, IT IS LIKE NOTHING WE’VE EVER FELT BEFORE. THIS IS INDEED THE MOST COMFY, BAGGY, AND GO TO RESORT AND AIRPORT LOOK. ",
            images: [
                "images/p16-1.webp",
                "images/p16-2.webp",
                "images/p16-3.webp",
                "images/p16-4.webp"
            ],
            specs: [
                "100% LUXURY IMPORTED RIBBED COTTON LYCRA (Unisex)",
                "WEIGHT : 220 GSM cord",
                "DRILL STYLE COLLAR & STRAIGHT LEG",
                "TRIPLE TIER ELASTIC WAISTBAND FOR OPTIMUM COMFORT.",
                "WIDE PROFILE | RELAXED & BOXY FIT"
            ]
        }
    };

    if (productID && products[productID]) {
        const product = products[productID];
        document.getElementById("product-title").textContent = product.title;
        document.getElementById("product-price").textContent = product.price;
        document.getElementById("product-description").textContent = product.description;

        const imageElements = document.querySelectorAll(".product-image");
        product.images.forEach((img, index) => {
            if (imageElements[index]) imageElements[index].src = img;
        });

        const specsList = document.getElementById("product-specs");
        specsList.innerHTML = "";
        product.specs.forEach(spec => {
            const li = document.createElement("li");
            li.textContent = spec;
            specsList.appendChild(li);
        });
    }
});
